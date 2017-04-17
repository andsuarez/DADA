import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'articleSearchFilter'
})
export class DashboardSearchFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let filter = args[0].toLocaleLowerCase();
        return filter ? value.filter(article => article.title.toLocaleLowerCase().indexOf(filter) !== -1):value;
    }
}