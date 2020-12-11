import { Component, Input, OnInit } from '@angular/core';
import { NewsInterface } from '../news.interface';

@Component({
  selector: 'news-card-horizontal-title-only',
  templateUrl: './card-horizontal-title-only.component.html',
  styleUrls: ['./card-horizontal-title-only.component.scss'],
})
export class CardHorizontalTitleOnlyComponent implements OnInit {
  @Input() data: NewsInterface;

  constructor() {}

  ngOnInit(): void {}
}
