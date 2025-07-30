import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoCarouselComponent } from "../../../shared/sections/logo-carousel/logo-carousel.component";
import { CardPortListComponent } from "../../../shared/cards/lists/card-port-list/card-port-list.component";
import { FilterButtonComponent } from "../../../shared/buttons/filter-button/filter-button.component";
import { CardPortComponent } from "../../../shared/cards/card-port/card-port.component";
import { FooterComponent } from "../../../layout/footer/footer.component";

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
}
