import { Component, Input } from '@angular/core';
import { Category } from '../../../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: Category;

  constructor(private router: Router) {}

  goToSingleCategory(title: string) {
    this.router.navigate(['/category', title]);
  }
}
