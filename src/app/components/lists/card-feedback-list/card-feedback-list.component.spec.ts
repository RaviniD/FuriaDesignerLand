import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeedbackListComponent } from './card-feedback-list.component';

describe('CardFeedbackListComponent', () => {
  let component: CardFeedbackListComponent;
  let fixture: ComponentFixture<CardFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFeedbackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
