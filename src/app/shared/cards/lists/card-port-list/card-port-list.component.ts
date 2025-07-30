import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardPortComponent } from "../../card-port/card-port.component";

@Component({
	selector: "app-card-port-list",
	imports: [CommonModule, CardPortComponent],
	templateUrl: "./card-port-list.component.html",
	styleUrl: "./card-port-list.component.css",
})
export class CardPortListComponent {
}
