import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0
  counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter)
  counter$ = this.counterSubject.asObservable()

  constructor() { }

  get(): Observable<number>{
    return this.counter$
  }

  update(num: number): void{
    this.counter = num
    this.counterSubject.next(this.counter)
    console.log('update method in service',this.counter)
  }


}
