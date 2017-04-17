import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article.component';
import { DashboardComponent } from './dashboard.component';
import { ViewArticleComponent } from './view.article.component';
import { ArticleService } from './article.service';
import { FiltersComponent } from './filters.component';
import { DashboardSearchFilterPipe } from './dashboard-search-filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    DashboardSearchFilterPipe
  ],
  declarations: [
    AppComponent,
    AddArticleComponent,
    DashboardComponent,
    ViewArticleComponent,
    FiltersComponent
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
