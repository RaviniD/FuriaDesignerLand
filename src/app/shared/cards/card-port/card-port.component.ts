import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductViewModalComponent } from "../../../layout/product-view-modal/product-view-modal.component";

interface CardPort {
	id: number;
	title: string;
	year: string;
	topic: string;
	images: string[];
}

@Component({
	selector: "app-card-port",
	imports: [CommonModule, ProductViewModalComponent],
	templateUrl: "./card-port.component.html",
	styleUrl: "./card-port.component.css",
})
export class CardPortComponent {
	modalOpen = false;
	selectedCardsPort: CardPort | null = null;

	cardsPort: CardPort[] = [
		{
			id: 1,
			images: [
				"imgs/products-port/portProduct2_0.png",
				"imgs/products-port/portProduct2_1.png",
				"imgs/products-port/portProduct2_2.png",
			],
			title: "MOVADO | CAMPANHA: TOMMY HILFIGER PA SITE VIVARA",
			topic: "ADAPTAÇÃO DE FORMATO",
			year: "2023",
		},
		{
			id: 2,
			images: [
				"imgs/products-port/portProduct4_0.png",
				"imgs/products-port/portProduct4_1.png",
				"imgs/products-port/portProduct4_2.png",
			],
			title: "MOVADO | CAMPANHA: TOMMY HILFIGER DIA DAS MÃES",
			topic: "ADAPTAÇÃO DE FORMATO",

			year: "2018",
		},
		{
			id: 3,
			images: [
				"imgs/products-port/portProduct3_0.png",
				"imgs/products-port/portProduct3_1.png",
				"imgs/products-port/portProduct3_2.png",
			],
			title: "CAMPANHAS: AIR WICK",
			topic: "ADAPTAÇÃO DE FORMATO E ANIMAÇÃO",
			year: "2020",
		},
		{
			id: 4,
			images: [
				"imgs/products-port/portProduct5_0.png",
				"imgs/products-port/portProduct5_1.png",
			],
			title: "EMBALAGENS: OAKBERRY",
			topic: "ADAPTAÇÃO, DIAGRAMAÇÃO E FINALIZAÇÃO",

			year: "2025",
		},
	];

	openModal(cardPort: CardPort) {
		this.selectedCardsPort = cardPort;
		this.modalOpen = true;
	}

	closeModal() {
		this.selectedCardsPort = null;
		this.modalOpen = false;
	}
}
