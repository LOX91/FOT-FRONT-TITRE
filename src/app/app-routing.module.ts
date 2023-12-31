import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';
import { InscriptionComponent } from './pages/page-inscription/page-inscription.component';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { ErrorComponent } from './pages/favoris/error.component';
import { EspaceAdminComponent } from './pages/espace-admin/espace-admin.component';
import { ArticleComponent } from './pages/article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddArticleComponent } from './pages/espace-admin/add-article/add-article.component';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ma-collection', component: ArticlesComponent },
  { path: 'ma-collection/:id', component: ArticleComponent },
  {path: 'ajouter-article', component: AddArticleComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/espace-admin/espace-admin.module').then(
        (m) => m.EspaceAdminModule
      ) , canActivate: [AdminGuard] ,
  },
  { path: 'ma-liste', component: ErrorComponent },
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
