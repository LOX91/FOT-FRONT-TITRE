import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/articles';
import { Category } from '../models/categorie';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    if(token){
      headers = headers.set('Authorization', 'Bearer ' + token)
    }
    return headers;
  }

  // Méthode pour récupérer tous les articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/article`, {headers: this.getHeaders()});
  }

  // Méthode pour récupérer un article
  getSingleArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/article/${articleId}`, {headers: this.getHeaders()});
  }

  // Méthode pour ajouter un nouvel article
  addArticle(article: Article): Observable<any> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/article`, article, {headers: this.getHeaders()});
  }

  // Méthode pour mettre à jour un article existant
  updateArticle(articleId: number, article: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/article/${articleId}`, article, {headers: this.getHeaders()});
  }

  // Méthode pour supprimer un article
  deleteArticle(articleId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/article/${articleId}`, {headers: this.getHeaders()});
  }

  //On récupère la liste des catégories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category`, {headers: this.getHeaders()});
  }
}
