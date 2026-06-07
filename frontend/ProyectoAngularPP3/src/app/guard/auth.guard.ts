import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  const allowedRoles: string[] | undefined = route.data['roles'];
  if (allowedRoles && !allowedRoles.includes(auth.getRole())) {
    redirectByRole(auth.getRole(), router);
    return false;
  }

  return true;
};

function redirectByRole(role: string, router: Router): void {
  if (role === 'CATEDRATICO') router.navigate(['/mi-curso']);
  else if (role === 'ALUMNO') router.navigate(['/mi-curso-alumno']);
  else router.navigate(['/inicio']);
}
