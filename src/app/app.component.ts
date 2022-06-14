import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent implements OnInit{
  title = 'exercise';
  
  constructor(private counterService: CounterService){}  

  ngOnInit(): void {
   
  }
 
}
