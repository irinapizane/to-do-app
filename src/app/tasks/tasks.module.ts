import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [CategoryComponent, CategoryListComponent],
  imports: [CommonModule, SharedModule],
  exports: [CategoryComponent, CategoryListComponent]
})
export class TasksModule {}
