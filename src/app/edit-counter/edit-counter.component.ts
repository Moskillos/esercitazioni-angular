import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
  providers: [CounterService]
})
export class EditCounterComponent implements OnInit {
  @Output() counterChanges = new EventEmitter<number>()
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {    
  }

  addiction(num: number){        
    this.counterService.increment(num)
    this.counterChanges.emit(this.counterService.get())    
  }

  subtraction(num: number){        
    this.counterService.decrement(num)
    this.counterChanges.emit(this.counterService.get()) 
  }

}
