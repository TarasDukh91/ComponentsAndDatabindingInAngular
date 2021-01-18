import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timerId;
  evenNumbers = []
  oddNumbers = []
  intervalStarted(clickData: number) {   
    this.timerId = setInterval(() => {
      clickData++
      console.log(clickData);
      if(clickData % 2 === 0){
        this.evenNumbers.push(clickData)
        console.log(`${clickData} is even number`);
        console.log(this.evenNumbers);
      } else {
        this.oddNumbers.push(clickData)
        console.log(`${clickData} is a odd number`)
        console.log(this.oddNumbers);
      }
    }, 1000)
  }
  intervalEnded() {
    clearInterval(this.timerId)
  }
}