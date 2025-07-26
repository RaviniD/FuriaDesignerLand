import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardPopComponent } from "../../card-pop/card-pop.component";

@Component({
  selector: "app-card-pop-list",
  imports: [CommonModule, CardPopComponent],
  templateUrl: "./card-pop-list.component.html",
  styleUrl: "./card-pop-list.component.css",
})
export class CardPopListComponent {
  cardsPop = signal([
    { id: 1, content: "Adaptação e Desdobramento", icon: "imgs/Card1.svg" },
    { id: 2, content: "Animação de Banners", icon: "imgs/Card2.svg" },
    { id: 3, content: "Arte-finalização", icon: "imgs/Card3.svg" },
  ]);
}
