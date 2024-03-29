import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiKey = '0dca06b2c93645b7a54e7db2242df51a';
  private token = 'c819541c3aed22bd2bd23935bd319839';
  getHeadlines() {

    return this.http.get(
      `https://gnews.io/api/v4/top-headlines?token=${this.token}&lang=en`
    );
    // return this.http.get(
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`
    // );
  }
  getCategorized(category) {
    return this.http.get(
      `https://gnews.io/api/v4/top-headlines?token=${this.token}&lang=en&topic=${category}`
    );
    // return this.http.get(
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${this.apiKey}`
    // );
  }
}
