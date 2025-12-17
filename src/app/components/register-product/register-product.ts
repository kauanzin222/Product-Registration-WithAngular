import { Component, Input } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.html',
  styleUrl: './register-product.css',
})
export class RegisterProduct {

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];
}
