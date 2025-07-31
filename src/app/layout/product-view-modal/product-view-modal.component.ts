import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product-view-modal',
  imports: [],
  templateUrl: './product-view-modal.component.html',
  styleUrl: './product-view-modal.component.css',
  animations: [ // Defina as animações aqui
    trigger('fadeInOut', [
      transition(':enter', [ // Animação de entrada
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [ // Animação de saída
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProductViewModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  
  @Input() cardsPortImages: string[] = [];
  @Input() cardsPortTitle = '';
  @Input() cardsPortTopic = '';
  @Input() cardsPortYear = '';
  
  currentImage = '';

  ngOnChanges() {
    if (this.cardsPortImages.length > 0 && !this.currentImage) {
      this.currentImage = this.cardsPortImages[0];
    }
  }

  closeModal() {
    this.closed.emit();
// Quando fechar o modal
document.body.classList.remove('modal-open');
  }

  scrollToImage(event: Event, image: string) {
    event.preventDefault();
    this.currentImage = image;
    const index = this.cardsPortImages.indexOf(image);
    const element = document.querySelectorAll('.image-container')[index];
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}