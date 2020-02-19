import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
    console.log('Product Service Constructor');
  }

  productsUrl:string = 'http://localhost:8000/api/products';

  getProducts():Observable<Product[]> {
    
    return this.http.get<Product[]>(this.productsUrl);

    // return [
    //   {
    //     id: 1,
    //     name: 'Product 1',
    //     color: 'Green',
    //     size: 20, 
    //     checked: false
    //   },
    //   {
    //     id: 2,
    //     name: 'Product 2',
    //     color: 'Red',
    //     size: 50,
    //     checked: false
    //   },
    //   {
    //     id: 3,
    //     name: 'Product 3',
    //     color: 'Blue',
    //     size: 10,
    //     checked: false
    //   }
    // ]
  }

  // Delete Product 
  deleteProduct(product):Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.delete<Product>(url, httpOptions);
  }

  // Add Product 
  addProduct(product:Product): Observable<Product> {
    return this.http.post<Product>(`${this.productsUrl}/`, product, httpOptions);
  }
}
