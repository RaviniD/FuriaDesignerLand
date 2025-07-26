import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SlideInfoComponent } from "./slide-info.component";

describe("SlideInfoComponent", () => {
	let component: SlideInfoComponent;
	let fixture: ComponentFixture<SlideInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlideInfoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SlideInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
