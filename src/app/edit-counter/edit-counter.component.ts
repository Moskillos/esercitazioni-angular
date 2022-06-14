import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
  providers: [CounterService]
})
export class EditCounterComponent implements OnInit {
  
  number!: number;
  
  
  constructor(private counterService: CounterService) { 
    
  }

  ngOnInit(): void {      
    
  }
  
  update(num: number){
    this.counterService.update(num)
  }
  
}
