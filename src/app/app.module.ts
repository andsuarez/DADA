import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';

import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article.component';
import { DashboardComponent } from './dashboard.component';
import { ViewArticleComponent } from './view.article.component';

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

    MdCoreModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
