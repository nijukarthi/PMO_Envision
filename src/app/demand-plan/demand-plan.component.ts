import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, ProjectEntry, WtgRow, CUSTOMERS, YEARS } from '../data.service';

@Component({
  selector: 'app-demand-plan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demand-plan.component.html',
  styleUrls: ['./demand-plan.component.scss']
})
export class DemandPlanComponent implements OnInit {

  // ── State ──────────────────────────────────────────
  year     = '2026';
  customer = '';
  projects: ProjectEntry[] = [];
  private uidSeed = 0;

  // ── Options ────────────────────────────────────────
  years     = YEARS;
  customers = CUSTOMERS;

  // ── Summary modal ──────────────────────────────────
  summaryVisible = false;

  // ── Toast ──────────────────────────────────────────
  toastMsg     = '';
  toastWarn    = false;
  toastVisible = false;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private ds: DataService) {}

  ngOnInit() { /* year defaults to 2026 */ }

  // ── Computed helpers ───────────────────────────────

  get filtersReady(): boolean { return !!this.year && !!this.customer; }
  get hasData(): boolean {
    return this.projects.some(p => p.spv && p.rows.length > 0);
  }

  /** FIX 1 — always sequential display index from array position */
  displayIndex(uid: number): number {
    return this.projects.findIndex(p => p.uid === uid) + 1;
  }

  getProjects(): string[] { return this.ds.getProjects(this.customer); }

  getSPVs(projectCode: string): string[] { return this.ds.getSPVs(projectCode); }

  /** FIX 2&3 — SPVs used in OTHER cards with the SAME project code */
  usedSPVs(projectCode: string, myUid: number): string[] {
    return this.projects
      .filter(p => p.uid !== myUid && p.projectCode === projectCode && !!p.spv)
      .map(p => p.spv);
  }

  isSpvDisabled(spv: string, projectCode: string, myUid: number): boolean {
    if (!projectCode) return false;
    return this.usedSPVs(projectCode, myUid).includes(spv);
  }

  getMonthLabels(): string[] { return this.ds.getMonthLabels(this.year); }

  // ── Status badge ───────────────────────────────────
  get badgeClass(): string {
    return this.projects.some(p => p.spv) ? 'badge badge-green' : 'badge badge-gray';
  }
  get badgeText(): string {
    const n = this.projects.filter(p => p.spv).length;
    const r = this.projects.reduce((s, p) => s + p.rows.length, 0);
    const u = this.projects.reduce((s, p) =>
      s + p.rows.reduce((ss, r) => ss + r.mon.reduce((a, b) => a + b, 0), 0), 0);
    return n > 0 ? `${n} project(s) · ${r} rows · ${u} units` : 'No data entered';
  }

  // ── Event handlers ─────────────────────────────────

  onYearChange() {
    // just update year; existing projects retain their data but month headers refresh
  }

  onCustomerChange() {
    this.projects = [];
    this.uidSeed  = 0;
    if (this.filtersReady) { this.addProject(); }
  }

  addProject() {
    if (!this.filtersReady) return;
    this.projects = [
      ...this.projects,
      { uid: ++this.uidSeed, projectCode: '', spv: '', rows: [] }
    ];
  }

  removeProject(uid: number) {
    this.projects = this.projects.filter(p => p.uid !== uid);
    // FIX 1: displayIndex() automatically recalculates from array position
  }

  onProjectChange(uid: number, code: string) {
    const p = this.projects.find(p => p.uid === uid);
    if (!p) return;
    p.projectCode = code;
    p.spv         = '';
    p.rows        = [];
  }

  onSPVChange(uid: number, spv: string) {
    const p = this.projects.find(p => p.uid === uid);
    if (!p) return;
    p.spv  = spv;
    p.rows = this.ds.getDefaultRows(spv);
  }

  addRow(uid: number) {
    const p = this.projects.find(p => p.uid === uid);
    if (p) {
      p.rows = [...p.rows, { wtg: 'EN182', cap: 5, tower: '140HH-474T', blade: 'Big', qty: 0, mon: Array(12).fill(0) }];
    }
  }

  removeRow(uid: number, ri: number) {
    const p = this.projects.find(p => p.uid === uid);
    if (p) { p.rows = p.rows.filter((_, i) => i !== ri); }
  }

  updField(uid: number, ri: number, field: 'wtg' | 'cap' | 'tower' | 'blade' | 'qty', val: string | number) {
    const p = this.projects.find(p => p.uid === uid);
    if (!p || !p.rows[ri]) return;
    const row = p.rows[ri];
    switch (field) {
      case 'wtg':   row.wtg   = val as string; break;
      case 'cap':   row.cap   = val as number; break;
      case 'tower': row.tower = val as string; break;
      case 'blade': row.blade = val as string; break;
      case 'qty':   row.qty   = val as number; break;
    }
  }

  updMon(uid: number, ri: number, mi: number, val: number) {
    const p = this.projects.find(p => p.uid === uid);
    if (p && p.rows[ri]) { p.rows[ri].mon[mi] = isNaN(val) ? 0 : val; }
  }

  // ── Table totals ───────────────────────────────────

  rowTotal(row: WtgRow): number {
    return row.mon.reduce((a, b) => a + b, 0);
  }

  colTotal(rows: WtgRow[], mi: number): number {
    return rows.reduce((s, r) => s + (r.mon[mi] ?? 0), 0);
  }

  qtyTotal(rows: WtgRow[]): number {
    return rows.reduce((s, r) => s + (r.qty ?? 0), 0);
  }

  grandTotal(rows: WtgRow[]): number {
    return rows.reduce((s, r) => s + this.rowTotal(r), 0);
  }

  // ── Summary modal ──────────────────────────────────

  get summaryProjects(): ProjectEntry[] {
    return this.projects.filter(p => p.spv && p.rows.length > 0);
  }

  get summaryTotalQty(): number {
    return this.summaryProjects.reduce((s, p) => s + this.qtyTotal(p.rows), 0);
  }

  get summaryTotalUnits(): number {
    return this.summaryProjects.reduce((s, p) => s + this.grandTotal(p.rows), 0);
  }

  getTotalRows(): number {
    return this.summaryProjects.reduce((s, p) => s + p.rows.length, 0);
  }

  summaryColTotal(mi: number): number {
    return this.summaryProjects.reduce((s, p) => s + this.colTotal(p.rows, mi), 0);
  }

  openSummary() {
    if (!this.hasData) { this.showToast('No data entered yet.', true); return; }
    this.summaryVisible = true;
  }

  closeSummary() { this.summaryVisible = false; }

  submitPlan() {
    this.closeSummary();
    this.showToast('✅ Demand plan submitted successfully!');
    // In production: call API here
    console.log('Submitting plan:', {
      year: this.year,
      customer: this.customer,
      projects: this.summaryProjects.map(p => ({
        project: p.projectCode,
        spv: p.spv,
        rows: p.rows
      }))
    });
  }

  // ── Toast ──────────────────────────────────────────

  showToast(msg: string, warn = false) {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastMsg     = msg;
    this.toastWarn    = warn;
    this.toastVisible = true;
    this.toastTimer   = setTimeout(() => { this.toastVisible = false; }, 3000);
  }

  // ── Track by ───────────────────────────────────────

  trackByUid(_: number, p: ProjectEntry) { return p.uid; }
  trackByIdx(i: number) { return i; }
}
