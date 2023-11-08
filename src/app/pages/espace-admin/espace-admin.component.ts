import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles.service';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/models/articles';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css'],
})
// espace-admin.component.ts

// Importez les dépendances nécessaires
export class EspaceAdminComponent implements OnInit {
  articles: Article[] = [];

  selectedArticle: any = {};
  faBin = faTrash;
  faPencil = faPencil;
  baseUrl : string = "http://localhost:3000/api/picture/";

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  // Charger la liste des articles
  loadArticles(): void {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  // Ajouter un nouvel article
  addArticle(): void {
    this.articleService.addArticle(this.selectedArticle).subscribe((res) => {
      //Inutile ici en pas récupérer l'ensemble des articles | ajouter simplement l'ajouter à l'array articles!!
      this.selectedArticle = {}; // Réinitialiser le formulaire
    });
  }

  // Mettre à jour un article existant
  updateArticle(): void {
    this.articleService
      .updateArticle(this.selectedArticle.id, this.selectedArticle) //this.selectedArticle.id inutile
      .subscribe(() => {
        this.selectedArticle = {}; // Réinitialiser le formulaire
    });
  }

  // Supprimer un article
  deleteArticle(articleId: number): void {
    this.articleService.deleteArticle(articleId).subscribe(() => {
      // Remove the deleted article from the articles array
      this.articles = this.articles.filter(article => article.id_article !== articleId);
    });
  }

  // Éditer un article sélectionné
  editArticle(article: any): void {
    this.selectedArticle = { ...article }; // Copier l'article pour éviter la liaison bidirectionnelle
  }
}
