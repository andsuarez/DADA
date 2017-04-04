import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article.component';
import { DashboardComponent } from './dashboard.component';
import { ViewArticleComponent } from './view.article.component';
import { ArticleService } from './article.service';

const appRoutes: Routes = [
  {path: 'add', component: AddArticleComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'article/:id', component: ViewArticleComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    DashboardComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
