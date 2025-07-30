import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-view-modal',
  imports: [],
  templateUrl: './product-view-modal.component.html',
  styleUrl: './product-view-modal.component.css'
})
export class ProductViewModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  
  @Input() cardsPortImages: string[] = [];
  @Input() cardsPortTitle = '';
  @Input() cardsPortYear = '';
  
  currentImage = '';

  ngOnChanges() {
    if (this.cardsPortImages.length > 0 && !this.currentImage) {
      this.currentImage = this.cardsPortImages[0];
    }
  }

  closeModal() {
    this.closed.emit();
  }
}