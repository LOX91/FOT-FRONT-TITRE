import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';
import { InscriptionComponent } from './pages/page-inscription/page-inscription.component';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { ErrorComponent } from './pages/favoris/error.component';
import { EspaceAdminComponent } from './pages/espace-admin/espace-admin.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ma-collection', component: ArticlesComponent },
  { path: 'ma-collection/:id', component: ArticleComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/espace-admin/espace-admin.module').then(
        (m) => m.EspaceAdminModule
      ) /*, canActivate: [adminGuard] */,
  },
  { path: 'ma-liste', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
