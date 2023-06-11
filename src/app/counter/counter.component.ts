
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="Reset(50)">Reset</button>
    <button (click)="IncreaseBy(-1)">-1</button>
    <button (click)="IncreaseBy(1)">+1</button>

  `,
})

export class CounterComponent {
  public counter : number = 10;

  constructor() {
    this.counter = 0;
   }

  IncreaseBy(value:  number):void{
    this.counter += value;
  }

  Reset(value:number  = 10): void{
    this.counter = value;
  }

}
