import { Component } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FooterComponent } from "../../../layout/footer/footer.component";
import { CardPortListComponent } from "../../../shared/cards/lists/card-port-list/card-port-list.component";
import { ConfirmModalComponent } from "../../../layout/confirm-modal/confirm-modal.component";

@Component({
	selector: "app-budget",
	imports: [
    ReactiveFormsModule,
    FooterComponent,
    CardPortListComponent,
    FooterComponent,
    ConfirmModalComponent,
	FormsModule
],
	templateUrl: "./budget.component.html",
	styleUrl: "./budget.component.css",
})
export class BudgetComponent {
	showSuccessModal = false;
	formSubmitted = false;
	isLoading = false;
  
	onSubmit(event: Event) {
	  event.preventDefault();
	  
	  const form = event.target as HTMLFormElement;
	  
	  if (form.checkValidity() && !this.formSubmitted) {
		this.isLoading = true;
		this.formSubmitted = true;
		
		this.submitFormData(form);
	  }
	}
  
	private submitFormData(form: HTMLFormElement) {
	  const formData = new FormData(form);
	  
	  fetch(form.action, {
		method: 'POST',
		body: formData
	  })
	  .then(response => {
		if (response.ok) {
		  this.showSuccessModal = true; // Mostra o modal apenas após sucesso
		} else {
		  throw new Error('Erro no envio');
		}
	  })
	  .catch(error => {
		console.error('Erro:', error);
		// Você pode mostrar uma mensagem de erro aqui se quiser
	  })
	  .finally(() => {
		this.isLoading = false;
	  });
	}
  
	closeModal() {
	  this.showSuccessModal = false;
	  // Opcional: redirecionar apenas quando o modal for fechado
	  // const nextUrl = (document.querySelector('input[name="_next"]') as HTMLInputElement)?.value;
	  // if (nextUrl) window.location.href = nextUrl;
	}
  }