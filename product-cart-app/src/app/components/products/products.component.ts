import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    console.log(this.productService);
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(product:Product) {
    console.log('Delete me event emitted');

    // Delete in UI
    this.products = this.products.filter(p => p.id !== product.id);

    // Delete in Server 
    this.productService.deleteProduct(product).subscribe();
  }

  addProduct(product:Product) {
    this.productService.addProduct(product).subscribe(product => {
      this.products.push(product);
    });
  }

}
