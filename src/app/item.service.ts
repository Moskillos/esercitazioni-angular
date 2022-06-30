import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService{

  private items: any[]= [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
  ];

  itemSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.items);
  items$ = this.itemSubject.asObservable()

  getItems(): Observable<any[]>{
    return this.items$
  }
}
