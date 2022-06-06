import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter:number = 0;
  

  constructor() { }

  get(){
    return this.counter
  }

  increment(num: number = 1) {
    this.counter += num;
    console.log(this.counter)    
  }

  decrement(num: number = 1){
    if(this.counter - num < 0 ){
      console.error('il counter non può avere un valore negativo')
    } else {
      this.counter -= num;
    }
    console.log(this.counter)
       
  }
    

}
