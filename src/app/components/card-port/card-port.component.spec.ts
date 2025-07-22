import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortComponent } from './card-port.component';

describe('CardPortComponent', () => {
  let component: CardPortComponent;
  let fixture: ComponentFixture<CardPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
