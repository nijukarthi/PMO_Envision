import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  sidebarOpen    = true;
  logoutConfirm  = false;

  constructor(public auth: AuthService) {}

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }

  openLogoutConfirm()  { this.logoutConfirm = true; }
  cancelLogout()       { this.logoutConfirm = false; }

  confirmLogout() {
    this.logoutConfirm = false;
    this.auth.logout();
  }
}
