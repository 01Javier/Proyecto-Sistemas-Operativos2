import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  const allowedRoles: string[] | undefined = route.data['roles'];
  if (allowedRoles && !allowedRoles.includes(auth.getRole())) {
    return redirectByRole(auth.getRole(), router);
  }

  return true;
};

function redirectByRole(role: string, router: Router): UrlTree {
  if (role === 'CATEDRATICO') return router.createUrlTree(['/mi-curso']);
  if (role === 'ALUMNO') return router.createUrlTree(['/mi-curso-alumno']);
  return router.createUrlTree(['/inicio']);
}
