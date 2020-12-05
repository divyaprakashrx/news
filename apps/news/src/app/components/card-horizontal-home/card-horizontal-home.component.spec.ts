import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorizontalHomeComponent } from './card-horizontal-home.component';

describe('CardHorizontalHomeComponent', () => {
  let component: CardHorizontalHomeComponent;
  let fixture: ComponentFixture<CardHorizontalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHorizontalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHorizontalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
