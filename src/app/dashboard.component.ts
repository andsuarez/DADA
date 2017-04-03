import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Articles } from './articles';
import { ARTICLES } from './mock-articles';
import { ArticleService } from './article.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers: [ArticleService]
})

export class DashboardComponent{
    articles = ARTICLES;

    constructor(
        private router: Router,
        private service: ArticleService
    ) {}

    selectArticle(article: Articles) {
        this.router.navigate(['/article', article.id]);
    }
}