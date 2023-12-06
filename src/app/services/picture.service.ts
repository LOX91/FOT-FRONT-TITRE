import { Injectable } from '@angular/core';
import { Picture } from '../models/pictures';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  picture: Picture[] = [];

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    if(token){
      headers = headers.set('Authorization', 'Bearer ' + token)
    }
    return headers;
  }

  getImage() {
    return this.http.get('http://localhost:3000/api/picture', {
      responseType: 'blob', headers: this.getHeaders()
    });
  }
  getImageById(id: number) {
    return this.http.get(`http://localhost:3000/api/picture/${id}`, {
      responseType: 'blob', headers: this.getHeaders()
    });
  }

  postImage(formData: FormData) {
    return this.http.post('http://localhost:3000/api/picture', formData, {headers: this.getHeaders()});
  }

  deletePhotos(id: number) {
    return this.http.delete(`http://localhost:3000/api/picture/${id}`, {headers: this.getHeaders()});
  }
}
