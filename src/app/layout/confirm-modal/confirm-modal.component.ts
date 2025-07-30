import { Component, EventEmitter, Input, Output } from "@angular/core";
import { OrceButtonComponent } from "../../shared/buttons/orce-button/orce-button.component";

@Component({
	selector: "app-confirm-modal",
	imports: [OrceButtonComponent],
	templateUrl: "./confirm-modal.component.html",
	styleUrl: "./confirm-modal.component.css",
})
export class ConfirmModalComponent {
	@Input() isVisible = false;
	@Output() closed = new EventEmitter<void>();

	close() {
		this.isVisible = false;
		this.closed.emit();
	}
}
