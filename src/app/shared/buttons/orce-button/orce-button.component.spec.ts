import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OrceButtonComponent } from "./orce-button.component";

describe("OrceButtonComponent", () => {
	let component: OrceButtonComponent;
	let fixture: ComponentFixture<OrceButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OrceButtonComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(OrceButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
