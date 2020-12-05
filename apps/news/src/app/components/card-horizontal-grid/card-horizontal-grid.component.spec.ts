import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorizontalGridComponent } from './card-horizontal-grid.component';

describe('CardHorizontalGridComponent', () => {
  let component: CardHorizontalGridComponent;
  let fixture: ComponentFixture<CardHorizontalGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHorizontalGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHorizontalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
