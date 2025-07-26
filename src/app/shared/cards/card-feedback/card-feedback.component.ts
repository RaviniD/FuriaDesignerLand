import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-card-feedback",
	imports: [CommonModule],
	templateUrl: "./card-feedback.component.html",
	styleUrl: "./card-feedback.component.css",
})
export class CardFeedbackComponent {
	@Input() iconLogoCard!: string;
	@Input() feedbackTextCard!: string;
	@Input() iconPersonCard!: string;
	@Input() ProfessionPersonCard!: string;
}
