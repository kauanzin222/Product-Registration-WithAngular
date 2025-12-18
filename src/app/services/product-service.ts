import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/ProductInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://localhost:8080/Products");
  }

  save(product: ProductInterface) {
    return this.http.post<ProductInterface>("http://localhost:8080/Products", product)

    /*product.id = this.products.length + 1;
    this.products.push(product);*/
  }
}
