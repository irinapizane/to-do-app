import { Component } from '@angular/core';
import { Category } from '../../../shared/models/category.model';
import { categories as data } from '../../../shared/data/categoriesMocks';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent  {
  categories: Category[] = data;

  constructor() { }

}
