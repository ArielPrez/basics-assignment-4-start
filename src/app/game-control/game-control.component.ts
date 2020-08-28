import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  lastNumber = 0;

  // tslint:disable-next-line: no-output-rename
  @Output('intkk') intervalKK = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.intervalKK.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

}
