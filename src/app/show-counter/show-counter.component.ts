import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  @Input() counter!:number;

  constructor(private counterService: CounterService) { 
    if (this.counter <=0 ){
      alert('il counter non può essere negativo')
    }
  }

  ngOnInit(): void {
   
  }

  

 

  

  
 

}
