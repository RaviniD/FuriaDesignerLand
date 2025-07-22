import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OrceButtonComponent } from "../../components/orce-button/orce-button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardPortListComponent } from '../../components/lists/card-port-list/card-port-list.component';

@Component({
  selector: 'app-budget',
  imports: [ReactiveFormsModule, OrceButtonComponent, FooterComponent, CardPortListComponent, FooterComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
}