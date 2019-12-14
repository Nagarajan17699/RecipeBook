import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() contentEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClickRecipe(dispContent:string)
  {
    this.contentEvent.emit(dispContent);
    console.log(dispContent);
  }
}
