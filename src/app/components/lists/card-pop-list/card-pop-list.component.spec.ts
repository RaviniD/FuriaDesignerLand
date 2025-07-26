import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardPopListComponent } from "./card-pop-list.component";

describe("CardPopListComponent", () => {
  let component: CardPopListComponent;
  let fixture: ComponentFixture<CardPopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPopListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
