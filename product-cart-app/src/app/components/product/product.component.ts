import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter();
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      product: true,
      'big_size': this.product.size >= 20
    }
    return classes;
  }

  setStyles() {
    let styles = {
      color: this.product.color
    }
    return styles;
  }

  onToggle(product) {
    product.checked = !product.checked;

  
  }

  onDelete(product) {
    this.deleteProduct.emit(product);
    console.log('Delete');
  }

}
