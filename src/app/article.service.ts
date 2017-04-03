import { Injectable } from '@angular/core';
import { Articles } from './articles';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {
    getArticles(): Promise<Articles[]> {
        return Promise.resolve(ARTICLES);
    };
}