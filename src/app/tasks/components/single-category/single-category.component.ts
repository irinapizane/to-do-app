import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../data/categories';
import { Category } from '../../models/category';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss'],
})
export class SingleCategoryComponent implements OnInit {
  category?: Category;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const title = params['title'];
      const foundCategory = categories.find(
        (c) => c.title.toLowerCase() === title.toLowerCase()
      );
      if (foundCategory) {
        this.category = foundCategory;
      } else {
        console.log('Category not found');
      }
    });
  }
}
