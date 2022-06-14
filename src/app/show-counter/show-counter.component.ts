import {  Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
   counter!:number;
   

  constructor(private counterService: CounterService) { 
   
  }

  ngOnInit(): void {   
    this.counterService.get().subscribe(data => this.counter = data )
    
  }

 

  

  
 

}
