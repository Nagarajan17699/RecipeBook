import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
  listobj:Ingredient;
  @Output() valuesSubmitted = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(name:string,amount:number)
  {
 this.listobj = new Ingredient(name,amount);
 this.valuesSubmitted.emit(this.listobj);
  }
}
