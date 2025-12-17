import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';

@Component({
  selector: 'app-table-products',
  standalone: false,
  templateUrl: './table-products.html',
  styleUrl: './table-products.css',
})
export class TableProducts implements OnInit {

  idCount: number = 1;

  categories: CategoryInterface[] = [
    { id: 1, name: 'Produção própria' },
    { id: 2, name: 'Nacional' },
    { id: 3, name: 'Importado' },
    { id: 4, name: 'Premium' }
  ]

  // Objeto Produto vazio e Array de objetos Produtos
  products: ProductInterface[] = [];
  product: ProductInterface = {} as ProductInterface;

  saveProduct() {
    this.product.id = this.idCount++;
    this.products.push(this.product);

    this.product = {} as ProductInterface;
  }

  constructor() { }
  ngOnInit(): void {

  }
}
