// import { CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { inject } from '@angular/core';
// import { Observable } from 'rxjs';


// export adminGuard(): CanActivateFn {
//   return () => {
//     const serviceAuth: AuthService = inject(AuthService);
//     serviceAuth.admin$.pipe(
//       take(1),
//       tap(auth => {
//         if(auth) {
//           console.log("Route is fine");
//           return true
//         }
//       }
//     )

//   }
// };
// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      // Redirigez vers une page d'erreur ou de connexion si l'utilisateur n'est pas autorisé
      return this.router.createUrlTree(['/login']);
    }
  }
}
