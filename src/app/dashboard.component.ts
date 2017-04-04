import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes, Router } from '@angular/router';
import { Articles } from './articles';
// import { ARTICLES } from './mock-articles';
import { ArticleService } from './article.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    articles: Articles[] = [];

    constructor(
        // private router: Router,
        private articleService: ArticleService
    ) {}

    ngOnInit(): void {
        this.articleService.getArticles()
            .then(articles => this.articles = articles.slice(0,5));
    }
}