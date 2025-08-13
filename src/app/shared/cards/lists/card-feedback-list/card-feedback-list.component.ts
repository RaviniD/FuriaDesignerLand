import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardFeedbackComponent } from "../../card-feedback/card-feedback.component";

@Component({
	selector: "app-card-feedback-list",
	imports: [CommonModule, CardFeedbackComponent],
	templateUrl: "./card-feedback-list.component.html",
	styleUrl: "./card-feedback-list.component.css",
})
export class CardFeedbackListComponent {
	cardsFeedback = signal([
		{
			id: 1,
			iconLogo: "imgs/logos/NAOSEI LOGO.png",
			feedbackText:
				'"A qualidade das animações superou nossas expectativas. Entregaram rápido e sem retrabalho."',
			iconPerson: "imgs/FEEDBACK PERSON1.png",
			professionPerson:
				"Adriano Monteiro Senior Copywriter & Creative Director, Bob",
		},

		{
			id: 2,
			iconLogo: "imgs/logos/NORMATIF LOGO.png",
			feedbackText:
				'"Design impecável, comprometimento com a data de entrega, além da atenção aos detalhes, garantindo a conformidade dos dizeres."',
			iconPerson: "imgs/FEEDBACK PERSON2.png",
			professionPerson: "Kelly Silva, Normatif",
		},

		{
			id: 3,
			iconLogo: "imgs/logos/OAK BERRY LOGO2.png",
			feedbackText:
				'"É como ter um braço extra no time. Sempre prontos, sempre alinhados e rápidos na entrega."',
			iconPerson: "imgs/FEEDBACK PERSON3.png",
			professionPerson: "Joelita Lima, Oak Berry",
		},

		{
			id: 4,
			iconLogo: "imgs/logos/TAG WORLDWIDE LOGO.png",
			feedbackText:
				'A gente manda a campanha mãe e eles cuidam de todo o resto. Prático, eficiente e com ótimo custo-benefício."',
			iconPerson: "imgs/FEEDBACK PERSON4.png",
			professionPerson: "André Jun Morita Head of Studio, Tag Worldwide",
		},
	]);
}
