import { Component } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { UsersService } from 'src/app/services/users.service';
import { NgZone } from '@angular/core';
import { Favoris } from 'src/app/models/favoris';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  articlesFavori!: Favoris[];
 id_user = +localStorage.getItem('id_user')!;
 baseUrl: string = 'http://localhost:3000/api/picture/';
  constructor(private userService: UsersService) {}



  ngOnInit() {
    this.loadFavoris();
  }

  loadFavoris(){
    this.userService.getFavoritesByUser(this.id_user).subscribe({
      next: (favoris: Favoris[])=>{
        this.articlesFavori = favoris
        console.log('Favoris recu :', this.articlesFavori)
      }, error: error =>{
        console.error('Il y a un erreur : ', error)
      }
     }
     )
  }

  removeFavoris(favorisId: number){
    this.userService.deleteFavoris(favorisId, this.id_user).subscribe({
      next: ()=>{
        this.loadFavoris();
      }
    })
  }
}
