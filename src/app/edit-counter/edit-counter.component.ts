import { Component, OnInit, } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {

  number: number = 1;


  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {

  }

  update(): void{
    this.counterService.update(this.number)
  }

}
