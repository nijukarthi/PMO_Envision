import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  errorMsg   = '';
  loading    = false;
  showPass   = false;
  currentYear = new Date().getFullYear();

  constructor(
    private fb:     FormBuilder,
    private auth:   AuthService,
    private router: Router
  ) {
    // Redirect if already logged in
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/demand-plan']);
    }

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.form.controls; }

  get usernameInvalid(): boolean {
    return this.f['username'].invalid && this.f['username'].touched;
  }
  get passwordInvalid(): boolean {
    return this.f['password'].invalid && this.f['password'].touched;
  }

  togglePass() { this.showPass = !this.showPass; }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMsg = '';

    // Simulate async call (250ms) then validate
    setTimeout(() => {
      const err = this.auth.login(
        this.f['username'].value,
        this.f['password'].value
      );
      this.loading = false;
      if (err) {
        this.errorMsg = err;
      } else {
        this.router.navigate(['/demand-plan']);
      }
    }, 250);
  }
}
