import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';
import { CategoryService } from '../../services/category-service';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-table-products',
  standalone: false,
  templateUrl: './table-products.html',
  styleUrl: './table-products.css',
})
export class TableProducts implements OnInit {

  categories: CategoryInterface[] = [];

  // Objeto Produto vazio e Array de objetos Produtos
  products: ProductInterface[] = [];
  product: ProductInterface = {} as ProductInterface;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.getCategories();
    //this.products = this.productService.getProducts();

    this.categoryService.getCategories().subscribe({
      /* data é o que vou receber do backend */
      next: data => { this.categories = data }
    });

    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    });
  }

  saveProduct() {
    this.productService.save(this.product).subscribe({
      next: data => {
        this.products.push(data);
        this.product = {} as ProductInterface;
      }
    });
  };
}
