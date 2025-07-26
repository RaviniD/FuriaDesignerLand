import { Component } from "@angular/core";
import { OrceButtonComponent } from "../../components/orce-button/orce-button.component";
import { CardPopListComponent } from "../../components/lists/card-pop-list/card-pop-list.component";
import { LogoCarouselComponent } from "../../components/logo-carousel/logo-carousel.component";
import { SlideInfoComponent } from "../../components/slide-info/slide-info.component";
import { CardPortListComponent } from "../../components/lists/card-port-list/card-port-list.component";
import { CardFeedbackListComponent } from "../../components/lists/card-feedback-list/card-feedback-list.component";
import { FooterComponent } from "../../components/footer/footer.component";
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
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
