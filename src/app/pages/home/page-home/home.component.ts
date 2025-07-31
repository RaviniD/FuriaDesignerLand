import { Component } from "@angular/core";
import { OrceButtonComponent } from "../../../shared/buttons/orce-button/orce-button.component";
import { CardPopListComponent } from "../../../shared/cards/lists/card-pop-list/card-pop-list.component";
import { LogoCarouselComponent } from "../../../shared/sections/logo-carousel/logo-carousel.component";
import { SlideInfoComponent } from "../components-home/slide-info/slide-info.component";
import { CardPortListComponent } from "../../../shared/cards/lists/card-port-list/card-port-list.component";
import { CardFeedbackListComponent } from "../../../shared/cards/lists/card-feedback-list/card-feedback-list.component";
import { FooterComponent } from "../../../layout/footer/footer.component";
import { TextChangerComponent } from "../components-home/text-changer/text-changer.component";
// import { TextChangerComponent } from "../../components/text-changer/text-changer.component";

@Component({
	selector: "app-home",
	imports: [
    OrceButtonComponent,
    CardPopListComponent,
    LogoCarouselComponent,
    SlideInfoComponent,
    CardPortListComponent,
    CardFeedbackListComponent,
    FooterComponent,
    TextChangerComponent
],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {}
