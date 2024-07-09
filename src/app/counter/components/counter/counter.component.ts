import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  ReduceBy():void{
    this.counter -= 1;
  }

  resetButton(){
    this.counter = 10;
  }
}
