import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardPortComponent } from "../../card-port/card-port.component";

@Component({
	selector: "app-card-port-list",
	imports: [CommonModule, CardPortComponent],
	templateUrl: "./card-port-list.component.html",
	styleUrl: "./card-port-list.component.css",
})
export class CardPortListComponent {
	cardsPort = signal([
		{
			id: 1,
			icon: "imgs/jobdemo4.png",
			tittle:
				"MOVADO | CAMPANHA: TOMMY HILFIGER PA SITE VIVARA | ADAPTAÇÃO DE FORMATO",
			year: "2023",
		},
		{
			id: 2,
			icon: "imgs/jobdemo2.png",
			tittle:
				"MOVADO | CAMPANHA: TOMMY HILFIGER DIA DAS MÃES | CRIAÇÃO E ADAPTAÇÃO DE FORMATO ",
			year: "2018",
		},
		{
			id: 3,
			icon: "imgs/jobdemo3.png",
			tittle: "CAMPANHAS: AIR WICK | ADAPTAÇÃO DE FORMATO E ANIMAÇÃO",
			year: "2020",
		},
		{
			id: 4,
			icon: "imgs/jobdemo5.png",
			tittle: "EMBALAGENS: OAKBERRY | ADAPTAÇÃO, DIAGRAMAÇÃO E FINALIZAÇÃO ",
			year: "2025",
		},
	]);
}
