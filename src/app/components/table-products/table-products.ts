import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-table-products',
  standalone: false,
  templateUrl: './table-products.html',
  styleUrl: './table-products.css',
})
export class TableProducts {

  categories: CategoryInterface[] = [
    {
      id: 1,
      name: 'Produção própria'
    },
    {
      id: 2,
      name: 'Nacional'
    },
    {
      id: 3,
      name: 'Importado'
    },
    {
      id: 4,
      name: 'Premium'
    }
  ]
}
