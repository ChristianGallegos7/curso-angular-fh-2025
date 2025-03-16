import { Component, signal } from "@angular/core";

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  counter = 1;
  counterSignal = signal(10);


  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreseBy(value: number) {
    this.counter -= value;
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}