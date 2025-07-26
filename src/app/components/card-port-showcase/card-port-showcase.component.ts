import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardPortComponent } from "../card-port/card-port.component";

@Component({
  selector: "app-card-port-showcase",
  imports: [CommonModule, CardPortComponent],
  templateUrl: "./card-port-showcase.component.html",
  styleUrl: "./card-port-showcase.component.css",
})
export class CardPortShowcaseComponent {
  cardsPort = signal([
    {
      id: 1,
      icon: "imgs/jobdemo.png",
      tittle: "ADIDAS | FUTEBOL CLUBE SHOW BRASIL LOREM IPSUM ",
      year: "2019",
    },
    {
      id: 2,
      icon: "imgs/jobdemo.png",
      tittle: "2ADIDAS | FUTEBOL CLUBE SHOW BRASIL LOREM IPSUM ",
      year: "2020",
    },
    {
      id: 3,
      icon: "imgs/jobdemo.png",
      tittle: "3ADIDAS | FUTEBOL CLUBE SHOW BRASIL LOREM IPSUM ",
      year: "2020",
    },
    {
      id: 4,
      icon: "imgs/jobdemo.png",
      tittle: "4ADIDAS | FUTEBOL CLUBE SHOW BRASIL LOREM IPSUM ",
      year: "2020",
    },
  ]);
}
