import { Component, Input } from "@angular/core";

@Component({
  selector: "app-filter-button",
  imports: [],
  templateUrl: "./filter-button.component.html",
  styleUrl: "./filter-button.component.css",
})
export class FilterButtonComponent {
  @Input() public type!: string;
  @Input() public onClick: () => void = () => {
    return;
  };
}
