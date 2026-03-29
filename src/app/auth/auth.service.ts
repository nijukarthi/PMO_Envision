import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthUser {
  username: string;
  displayName: string;
  role: string;
}

// ── Allowed credentials (mock) ──
const VALID_USERS: { username: string; password: string; displayName: string; role: string }[] = [
  { username: 'siteengineer_user1', password: '123456', displayName: 'Site Engineer User 1', role: 'Site Engineer' }
];

const SESSION_KEY = 'envision_auth_user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _currentUser: AuthUser | null = null;

  constructor(private router: Router) {
    // Restore session from sessionStorage on page refresh
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      try { this._currentUser = JSON.parse(stored); } catch { this._currentUser = null; }
    }
  }

  get currentUser(): AuthUser | null { return this._currentUser; }

  get isLoggedIn(): boolean { return this._currentUser !== null; }

  get displayName(): string { return this._currentUser?.displayName ?? ''; }

  get username(): string { return this._currentUser?.username ?? ''; }

  /**
   * Validate credentials and create session.
   * Returns an error message string on failure, or null on success.
   */
  login(username: string, password: string): string | null {
    const match = VALID_USERS.find(
      u => u.username === username.trim() && u.password === password
    );
    if (!match) {
      return 'Invalid username or password. Please try again.';
    }
    this._currentUser = { username: match.username, displayName: match.displayName, role: match.role };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(this._currentUser));
    return null;
  }

  logout(): void {
    this._currentUser = null;
    sessionStorage.removeItem(SESSION_KEY);
    this.router.navigate(['/login']);
  }
}
