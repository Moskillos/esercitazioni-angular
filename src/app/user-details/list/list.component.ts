import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { User, Role } from 'src/app/models/User';




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

  getColor(role: Role): string{
    switch(role){
      case Role.STAFF: return 'blue';
      case Role.MANAGER: return 'red';
      case Role.STUDENT: return 'yellow';
      case Role.ADMIN: return 'green';

    }
  }

  userDeleters(num: number){
    this.userDelete.emit(num)
  }

  selectUser(user: User){    
    console.log(user)
}




}
