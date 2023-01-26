import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { categories as data } from 'src/app/tasks/data/categories';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent  {
  categories: Category[] = data;

  constructor() { }

}
