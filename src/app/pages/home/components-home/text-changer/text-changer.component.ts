import { Component, OnInit, OnDestroy } from "@angular/core";
@Component({
	selector: "app-text-changer",
	templateUrl: "./text-changer.component.html",
	styleUrl: "./text-changer.component.css",
})
export class TextChangerComponent implements OnInit, OnDestroy {
	words: string[] = ['DESIGNER', 'DESIGN'];
	currentIndex = 0;
	private intervalId: number | undefined;

	ngOnInit() {
	  this.startRotation();
	}
  
	ngOnDestroy() {
	  this.stopRotation();
	}
  
	startRotation() {
    this.intervalId = window.setInterval(() => {		this.currentIndex = (this.currentIndex + 1) % this.words.length;
	  }, 2000); // Muda a cada 2 segundos
	}
  
	stopRotation() {
	  if (this.intervalId) {
		clearInterval(this.intervalId);
	  }
	}
  }