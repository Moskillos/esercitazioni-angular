import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0

  constructor() { }

  get(): number{
    return this.counter
  }

  update(num: number = 1): void{
    this.counter = num
    console.log(this.counter)
  }


}
