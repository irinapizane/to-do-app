import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    SingleCategoryComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CategoryComponent, CategoryListComponent],
})
export class TasksModule {}
