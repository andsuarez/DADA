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
    articles: Articles[];
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

    comments = [];

    submitComment(newComment: string) {
        this.comments.push(newComment);

        console.log(this.comments);

        
        if(this.article.hasComments === false){
            this.article.hasComments = true;
        }

        //original code, needs modification
        // this.articleService.create(comment)
        //     .then(article => {
        //         this.articles.push(article);
        //     });

        
            
    }
}