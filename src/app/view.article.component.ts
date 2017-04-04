import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Articles } from './articles';
import { ArticleService } from './article.service';

@Component({
    selector: 'view-article',
    templateUrl: 'view.article.component.html',
    styleUrls: ['view.article.component.css']
})

export class ViewArticleComponent implements OnInit {
    article: Articles;

    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
            .subscribe(article => this.article = article);
    }
}