import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { OrceButtonComponent } from "../../../shared/buttons/orce-button/orce-button.component";
import { FooterComponent } from "../../../layout/footer/footer.component";
import { CardPortListComponent } from "../../../shared/cards/lists/card-port-list/card-port-list.component";

@Component({
	selector: "app-budget",
	imports: [
		ReactiveFormsModule,
		OrceButtonComponent,
		FooterComponent,
		CardPortListComponent,
		FooterComponent,
	],
	templateUrl: "./budget.component.html",
	styleUrl: "./budget.component.css",
})
export class BudgetComponent {}
