import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorizontalTitleOnlyComponent } from './card-horizontal-title-only.component';

describe('CardHorizontalTitleOnlyComponent', () => {
  let component: CardHorizontalTitleOnlyComponent;
  let fixture: ComponentFixture<CardHorizontalTitleOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHorizontalTitleOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHorizontalTitleOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
