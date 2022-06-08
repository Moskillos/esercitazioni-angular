import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  counter = 0
  constructor(){}  

  logCounter(event: number){
    this.counter = event
  }
 
}
