import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http:HttpClient) { }


  addFavorite(id_users:number,id_article:number){
    return this.http.post(`${this.apiUrl}/user/${id_users}/favorites/${id_article}`,id_article)
  } //voir avec louis pourquoi on a absolument besoint d'un argument après l'adresse alors que dans postman ça fonctionne sans body
}
