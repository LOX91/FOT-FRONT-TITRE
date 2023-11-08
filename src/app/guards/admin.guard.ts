import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';


export adminGuard(): CanActivateFn {
  return () => {
    const serviceAuth: AuthService = inject(AuthService);
    serviceAuth.admin$.pipe(
      take(1),
      tap(auth => {
        if(auth) {
          console.log("Route is fine");
          return true
        }
      }
    )

  }
};
