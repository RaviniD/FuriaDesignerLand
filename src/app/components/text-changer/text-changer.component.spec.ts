import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TextChangerComponent } from "./text-changer.component";

describe("TextChangerComponent", () => {
  let component: TextChangerComponent;
  let fixture: ComponentFixture<TextChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextChangerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
