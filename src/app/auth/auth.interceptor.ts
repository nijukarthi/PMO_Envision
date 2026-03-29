import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  // Clone request and attach Authorization header if user is logged in
  let authReq = req;
  if (auth.isLoggedIn && auth.username) {
    authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${btoa(auth.username)}`,
        'X-User':        auth.username
      }
    });
  }

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      // Auto-logout on 401 Unauthorized from API
      if (err.status === 401) {
        auth.logout();
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};
