import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card-port",
  imports: [CommonModule],
  templateUrl: "./card-port.component.html",
  styleUrl: "./card-port.component.css",
})
export class CardPortComponent {
  @Input() iconCard!: string;
  @Input() tittleCard!: string;
  @Input() yearCard!: string;
  @Input() href!: string;
}
