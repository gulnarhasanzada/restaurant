import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  feature:string = 'recipes'

  selectMenu(feature:string){
    this.feature = feature
  }
}
