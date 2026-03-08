import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthService = inject(AuthService)
  const router: Router = inject(Router)

  if (!authService.isAuth) {
    router.navigate(['/public/login'])
    return false
  }

  return true
}
