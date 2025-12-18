import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/CategoryInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>("http://localhost:8080/Categories");
  }
}
