import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortListComponent } from './card-port-list.component';

describe('CardPortListComponent', () => {
  let component: CardPortListComponent;
  let fixture: ComponentFixture<CardPortListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPortListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
