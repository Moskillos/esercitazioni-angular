import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  counter = 0

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
   
  }

  
 

}
