import { Component,Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/User';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() address!: Address;
  constructor() {          
   }
    


  ngOnInit(): void {
  }

}
