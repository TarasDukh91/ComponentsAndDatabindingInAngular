import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: number = 0;
  @Output() startButtonClicked = new EventEmitter<number>();
  @Output() stopButtonClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  startInterval() {
    this.startButtonClicked.emit(this.timer);
    
    // let timerId = setInterval(() => {
    //   this.timer++
    //   console.log(this.timer);
    // }, 1000)
  }
  endInterval() {
    this.stopButtonClicked.emit(this.timer)
  }
}
