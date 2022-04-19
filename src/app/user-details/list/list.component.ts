import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user!:User;
  @Input() users!: User[];
  @Output() userDelete = new EventEmitter()

  constructor() {   
         
   }

  ngOnInit(): void {
  }

  userDeleters(num: number){
    this.userDelete.emit(num)
  }

  selectUser(user: User){    
    console.log(user)
}




}
