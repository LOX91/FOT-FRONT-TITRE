import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Connexion } from 'src/app/models/connexion';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public admin$ = new BehaviorSubject<boolean>(false);
  public user$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private router: Router) {}

  connexion(emailParam: string, passwordParam: string) {
    interface ApiResponse {
      accessToken: string;
      admin: boolean;
      user: any; //Tu peux créer un modèle à la place du any ici
    }

    return this.http.post<ApiResponse>(`http://localhost:3000/api/auth/login`, { email: emailParam, password: passwordParam }).pipe(
      tap((res: ApiResponse) => {
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
        this.isAuth$.next(true);
        this.admin$.next(res.admin);
        this.user$.next(res.user);
        return res; // Return the response for further processing if needed
      }));
  }

  inscription(data: {
    firstname: string;
    name: string;
    password: string;
    email: string;
  }) {
    return this.http.post(`http://localhost:3000/api/auth/register`, data);
  }

  logout() {
    //deconnexion
    localStorage.removeItem('token');
    this.router.navigate(['/connexion']);
  }
}
