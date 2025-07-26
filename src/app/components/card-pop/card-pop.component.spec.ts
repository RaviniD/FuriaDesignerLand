import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardPopComponent } from "./card-pop.component";

describe("CardPopComponent", () => {
  let component: CardPopComponent;
  let fixture: ComponentFixture<CardPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
