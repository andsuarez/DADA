import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddArticleComponent } from './add-article.component';
import { ViewArticleComponent } from './view.article.component';

const appRoutes: Routes = [
  {path: 'add', component: AddArticleComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'article/:id', component: ViewArticleComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}