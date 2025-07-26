import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-pop",
  imports: [CommonModule],
  templateUrl: "./card-pop.component.html",
  styleUrl: "./card-pop.component.css",
})
export class CardPopComponent {
  @Input() iconCard!: string;
  @Input() contentCard!: string;
}
