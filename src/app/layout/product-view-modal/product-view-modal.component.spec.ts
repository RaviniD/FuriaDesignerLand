import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductViewModalComponent } from "./product-view-modal.component";

describe("ProductViewModalComponent", () => {
	let component: ProductViewModalComponent;
	let fixture: ComponentFixture<ProductViewModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductViewModalComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductViewModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
