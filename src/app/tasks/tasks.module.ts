import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, SharedModule],
  exports: [CategoryComponent]
})
export class TasksModule {}
