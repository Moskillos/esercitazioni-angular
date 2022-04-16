import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users!: User[];
  constructor() {          
   }
    


  ngOnInit(): void {
  }

}
