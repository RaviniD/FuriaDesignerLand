import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { OrceButtonComponent } from '../orce-button/orce-button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [OrceButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isVisible = true;
  lastScrollPosition = 0;
  isMobileMenuOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private viewportScroller: ViewportScroller,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.lastScrollPosition = window.pageYOffset;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 100) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
      this.lastScrollPosition = currentScrollPosition;
      this.isScrolled = currentScrollPosition > 50;
    }
  }

  scrollTo(anchor: string): void {
    if (anchor === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.viewportScroller.scrollToAnchor(anchor);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}