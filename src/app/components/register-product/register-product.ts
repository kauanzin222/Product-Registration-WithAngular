import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.html',
  styleUrls: ['./register-product.css'],
})
export class RegisterProduct implements OnInit {

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  product?: ProductInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }

  constructor() { }
  ngOnInit(): void {

  }
}
