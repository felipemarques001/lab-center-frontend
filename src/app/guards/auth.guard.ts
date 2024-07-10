import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const hasToken: Boolean = !!sessionStorage.getItem("auth-token");

  return hasToken ? true : router.createUrlTree(['/']);
}
