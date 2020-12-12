import { Component, OnInit, Input } from '@angular/core';
import { NewsInterface } from '../news.interface';
@Component({
  selector: 'news-card-horizontal-grid',
  templateUrl: './card-horizontal-grid.component.html',
  styleUrls: ['./card-horizontal-grid.component.scss']
})
export class CardHorizontalGridComponent implements OnInit {
  @Input() data: NewsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
