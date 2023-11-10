import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  addFavorite(id_users: number, id_article: number) {
    const body = {};
    // console.log('coucou');
    return this.http.post(
      `${this.apiUrl}/user/${id_users}/favorites/${id_article}`,
      body
    );
  }
  getFavoritesByUser(id_users: number) {
    return this.http.get(`${this.apiUrl}/user/${id_users}/favorites`);
  }
}
