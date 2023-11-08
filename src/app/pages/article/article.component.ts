import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles';
import { ArticleService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article$!: Observable<Article>;
  baseUrl : string = "http://localhost:3000/api/picture/";

  constructor(private articleService:ArticleService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    /*this.articleService.getSingleArticle().subscribe((article) => {
      this.article$ = article;
    });*/
    this.route.params.subscribe(params => {
      const articleId = +params['id']; // Extract the 'id' parameter from the URL
      this.article$ = this.articleService.getSingleArticle(articleId);
    });
  }
}
