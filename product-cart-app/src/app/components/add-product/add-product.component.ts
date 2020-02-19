import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: string;
  color: string;
  size: number;
  colors = [
    "Red",
    "Green",
    "Blue"
  ];

  @Output() addProduct: EventEmitter<any> = new EventEmitter();
    // We use <any> because we don't know the ID.

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const product = {
      name: this.name, 
      color: this.color, 
      size: this.size
    }
    this.addProduct.emit(product);
  }

}
