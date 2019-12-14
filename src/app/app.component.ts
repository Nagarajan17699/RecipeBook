import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dispStatus='recipe';

  servers = ['Hello','My','Name','is','Nagarajan'];

  onClickedHeader(feature:string)
  {
    this.dispStatus=feature;
  }
}
