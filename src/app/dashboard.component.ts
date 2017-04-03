import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Articles } from './articles';
import { ARTICLES } from './mock-articles';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent{
    articles = ARTICLES;

    // constructor(
    //     private router: Router;
    // ) {}

    // selectArticle(article: Articles) {
    //     this.router.navigate(['/article', articles.id]);
    // }
}