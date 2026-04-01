import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sidebarOpen = signal(true);
  showLogoutConfirm = false;
  currentRoute = '';
  activeMenu = 'demand';
  private routeSub!: Subscription;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.restore();
    this.currentRoute = this.router.url;
    this.updateActiveMenu(this.router.url);

    this.routeSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentRoute = e.urlAfterRedirects;
        this.updateActiveMenu(e.urlAfterRedirects);
      });

    if (window.innerWidth <= 768) {
      this.sidebarOpen.set(false);
    }
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  private updateActiveMenu(url: string) {
    if (url.includes('create')) this.activeMenu = 'create';
    else if(url.includes('demand')) this.activeMenu = 'demand';
    else if(url.includes('allocationApproval')) this.activeMenu = 'allocationApproval';
    else if(url.includes('componentAllocation')) this.activeMenu = 'componentAllocation';
    else this.activeMenu = 'demand';
  }

  get isLoginRoute(): boolean {
    return this.currentRoute.startsWith('/login') || this.currentRoute === '/';
  }

  navigate(menu: string) {
    this.activeMenu = menu;
    if (menu === 'demand') this.router.navigate(['/dashboard']);
    else if (menu === 'create') this.router.navigate(['/create-project']);
    else if (menu === 'allocationApproval') this.router.navigate(['/allocationApproval']);
    else if (menu === 'componentAllocation') this.router.navigate(['/componentAllocation']);
    else if (menu === 'WTGProduction') this.router.navigate(['/WTGProduction']);
    if (window.innerWidth <= 768) this.sidebarOpen.set(false);
  }

  toggleSidebar() { this.sidebarOpen.update(v => !v); }
  closeSidebar()  { this.sidebarOpen.set(false); }
  confirmLogout() { this.showLogoutConfirm = true; }
  cancelLogout()  { this.showLogoutConfirm = false; }

  doLogout() {
    this.showLogoutConfirm = false;
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
