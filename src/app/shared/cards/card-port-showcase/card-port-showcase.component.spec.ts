import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardPortShowcaseComponent } from "./card-port-showcase.component";

describe("CardPortShowcaseComponent", () => {
	let component: CardPortShowcaseComponent;
	let fixture: ComponentFixture<CardPortShowcaseComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CardPortShowcaseComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CardPortShowcaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
