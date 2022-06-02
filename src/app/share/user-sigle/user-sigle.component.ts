import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-sigle',
  templateUrl: './user-sigle.component.html',
  styleUrls: ['./user-sigle.component.css']
})
export class UserSigleComponent implements OnInit {
  openDetail = false;
  @Input() arr!: number;
  @Output() onClick = new EventEmitter<boolean>()

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  open(){
    this.router.navigate(['detail'], {relativeTo: this.route})
  }

  onClickEvent(){
    this.onClick.emit(this.openDetail = true)
  }
}
