import { Component, OnInit,Input } from '@angular/core';
import { NewsInterface } from '../news.interface';

@Component({
  selector: 'news-card-horizontal-home',
  templateUrl: './card-horizontal-home.component.html',
  styleUrls: ['./card-horizontal-home.component.scss'],
})
export class CardHorizontalHomeComponent implements OnInit {
  @Input() data: NewsInterface;

  constructor() {}

  ngOnInit(): void {}
}
