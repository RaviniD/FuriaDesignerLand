import { Component, Input } from "@angular/core";

@Component({
	selector: "app-orce-button",
	imports: [],
	templateUrl: "./orce-button.component.html",
	styleUrl: "./orce-button.component.css",
})
export class OrceButtonComponent {
	@Input() public type!: string;
	@Input() public href!: string;

	@Input() public onClick: () => void = () => {
		return;
	};
}
