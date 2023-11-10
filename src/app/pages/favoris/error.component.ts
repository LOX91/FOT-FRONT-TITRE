import { Component } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

articlesFavori!: Article[];

constructor(private userService: UsersService){}

ngOnInit(){

const id_user = localStorage.getItem('id_user');
if(id_user){

  this.userService.getFavoritesByUser(+id_user).subscribe((res )=>{
    console.log("ok",res)
  });
}


}


}


