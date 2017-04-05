import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Articles } from './articles';

@Injectable()
export class ArticleService {
    private articlesUrl = 'api/articles';  // URL to web api

    constructor(private http: Http) {}

    getArticles(): Promise<Articles[]> {
        return this.http.get(this.articlesUrl)
               .toPromise()
               .then(response => response.json().data as Articles[])
               .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getArticle(id: number): Promise<Articles> {
        return this.getArticles()
            .then(articles => articles.find(article => article.id === id));
    }
}