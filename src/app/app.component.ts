import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'exercise';
  array:any[] = [];
  constructor(private itemService: ItemService){
    this.items()
  }

  ngOnInit(): void {
    this.itemService.items$.subscribe(
      value => this.array = value
    )
  }

  items(){
  }

}
