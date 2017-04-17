import { Component } from '@angular/core';
import { DashboardSearchFilterPipe } from './dashboard-search-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  pipes: [DashboardSearchFilterPipe]
})
export class AppComponent {
  articleSearch: string = '';
}
