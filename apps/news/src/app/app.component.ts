import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@news/api-interfaces';
import { ApiService } from './services/api.service';
@Component({
  selector: 'news-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  Headlines: any;
  categoryNews: any;
  category = 'general';
  categories = [
    'General',
    'Technology',
    'Business',
    'Sports',
    'Entertainment',
    'Health',
    'Science',
  ];
  constructor(private http: HttpClient, private api: ApiService) {
    this.api
      .getHeadlines()
      .subscribe((response) => (this.Headlines = response));
    this.api
      .getCategorized(this.category)
      .subscribe((response) => (this.categoryNews = response));
  }
  onTabClick(event) {
    this.category = event.tab.textLabel.toLowerCase();
    this.api
      .getCategorized(this.category)
      .subscribe((response) => (this.categoryNews = response));
  }
}
