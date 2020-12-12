import { HttpService, Injectable } from '@nestjs/common';
import { Message } from '@news/api-interfaces';
@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  Headlines: any;
  categoryNews: any;

  private apiKey = '0dca06b2c93645b7a54e7db2242df51a';
  getHeadlines() {
    this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`
      )
      .pipe(
        (response) => (this.Headlines = JSON.parse(JSON.stringify(response)))
      );

    return this.Headlines;
  }
  getCategorized(category) {
    this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${this.apiKey}`
      )
      .pipe(
        (response) => (this.categoryNews = JSON.parse(JSON.stringify(response)))
      );
    return this.categoryNews;
  }
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
