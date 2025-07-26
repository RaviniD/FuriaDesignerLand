import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoCarouselComponent } from "../../components/logo-carousel/logo-carousel.component";
import { CardPortListComponent } from "../../components/lists/card-port-list/card-port-list.component";
import { FilterButtonComponent } from "../../components/filter-button/filter-button.component";
import { CardPortComponent } from "../../components/card-port/card-port.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
	selector: "app-portfolio",
	imports: [
		CommonModule,
		LogoCarouselComponent,
		CardPortListComponent,
		FilterButtonComponent,
		CardPortComponent,
		FooterComponent,
	],
	templateUrl: "./portfolio.component.html",
	styleUrl: "./portfolio.component.css",
})
export class PortfolioComponent {
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
