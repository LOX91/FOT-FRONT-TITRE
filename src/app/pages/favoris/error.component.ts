import { Component } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { UsersService } from 'src/app/services/users.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

articlesFavori!: Article[];

constructor(private userService: UsersService){}

// METHODE INITIALE

ngOnInit(){

const id_user = localStorage.getItem('id_user');
if(id_user){

  this.userService.getFavoritesByUser(+id_user).subscribe((res )=>{
    console.log("ok",res);
  },
  (error) => {
    console.error("Erreur lors de la récupération des favoris :", error);
  }

  );
}


 }





// ...
// methode loic ce
// export class ErrorComponent {

//   articlesFavori: Article[] = [];

// constructor(private userService: UsersService, private zone: NgZone) {
// this.articlesFavori = [];

// }

// // ...

// ngOnInit() {
//   const id_user = localStorage.getItem('id_user');
//   if (id_user) {
//     this.userService.getFavoritesByUser(+id_user).subscribe((res) => {
//       this.zone.run(() => {

//         console.log("ok", res);
//       });
//     });
//   }
}
