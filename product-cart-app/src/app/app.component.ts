import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'product-cart-app';

  changeName(name:string):void {
    this.title = 'changed';
  }
}
