import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-logo-carousel',
  imports: [],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.css'
})
export class LogoCarouselComponent {
  logos = signal([
    { id:1, src: 'imgs/logos/OAK BERRY LOGO.png', alt: 'Logo 1' },
    { id:2, src: 'imgs/logos/LOCALIZA LOGO.png', alt: 'Logo 2' },
    { id:3, src: 'imgs/logos/AIR WICK LOGO.png', alt: 'Logo 3' },
    { id:4, src: 'imgs/logos/DOVE LOGO.png', alt: 'Logo 4' },
    { id:5, src: 'imgs/logos/LAND ROVER LOGO.png', alt: 'Logo 5' },
    { id:6, src: 'imgs/logos/LOREAL LOGO.png', alt: 'Logo 6' }
  ]);
}
