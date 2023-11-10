import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles';
import { UserLog } from 'src/app/models/user-log';
import { ArticleService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article$!: Observable<Article>;
  baseUrl : string = "http://localhost:3000/api/picture/";
user!:UserLog
  constructor(private articleService:ArticleService,
              private route: ActivatedRoute,
              private userService:UsersService,
              private authService:AuthService){}

  ngOnInit(): void {
    /*this.articleService.getSingleArticle().subscribe((article) => {
      this.article$ = article;
    });*/
    this.authService.user$.subscribe((data)=>this.user=data)
    console.log('user',this.user);//a voir avec Louis

    this.route.params.subscribe(params => {
      const articleId = +params['id']; // Extract the 'id' parameter from the URL
      this.article$ = this.articleService.getSingleArticle(articleId);
    });
}

addFavorite(id_article:number){
const id_user = localStorage.getItem('id_user')
return this.userService.addFavorite(+id_user!,id_article)
// console.log("dans addfavorite",id_article);

}

}
