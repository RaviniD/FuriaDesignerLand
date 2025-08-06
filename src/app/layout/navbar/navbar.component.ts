import {
	Component,
	HostListener,
	OnInit,
	inject,
	PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser, ViewportScroller } from "@angular/common";
import { OrceButtonComponent } from "../../shared/buttons/orce-button/orce-button.component";
import { Router } from "@angular/router";

@Component({
	selector: "app-navbar",
	imports: [OrceButtonComponent],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
	isScrolled = false;
	isVisible = true;
	lastScrollPosition = 0;
	isMobileMenuOpen = false;

	private platformId = inject(PLATFORM_ID);
	private viewportScroller = inject(ViewportScroller);
	public router = inject(Router);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			this.lastScrollPosition = window.pageYOffset;
		}
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		if (isPlatformBrowser(this.platformId)) {
			const currentScrollPosition = window.pageYOffset;

			if (
				currentScrollPosition > this.lastScrollPosition &&
				currentScrollPosition > 100
			) {
				this.isVisible = false;
			} else {
				this.isVisible = true;
			}
			this.lastScrollPosition = currentScrollPosition;
			this.isScrolled = currentScrollPosition > 50;
		}
	}

	scrollTo(anchor: string): void {
		if (anchor === "top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			this.viewportScroller.scrollToAnchor(anchor);
		}
	}
}
