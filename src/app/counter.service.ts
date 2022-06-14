import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  number: number = 0
  counter = new BehaviorSubject<number>(this.number);   
  
  constructor() { }

  get(){
    return this.counter.asObservable()
  }

  update(num: number){
    this.number = num
    this.counter.next(this.number)   
    
  }
    

}
