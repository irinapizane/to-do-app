import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: Category
  component: CategoryComponent;

  goToSingleCategory(title: string) {
    this.router.navigate(['/category', title])
  }

  constructor(private router: Router) {}
}