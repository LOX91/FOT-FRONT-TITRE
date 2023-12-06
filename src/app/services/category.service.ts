import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    if(token){
      headers = headers.set('Authorization', 'Bearer ' + token)
    }
    return headers;
  }

  getCategorie():Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:3000/api/category', {headers: this.getHeaders()});
  }
}
