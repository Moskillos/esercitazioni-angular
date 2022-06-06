import { Component, OnInit } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
  providers: [CounterService]
})
export class EditCounterComponent implements OnInit {
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {    
  }

  addiction(num: number){        
    this.counterService.increment(num)
    
  }

  subtraction(num: number){        
    this.counterService.decrement(num)
  }

}
