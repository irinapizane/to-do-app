import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent, SharedModule_1 as SharedModule } from '../shared/components/task/task.component';

const routes: Routes = [
  { path: 'category/:title', component: SingleCategoryComponent },
];

@NgModule({
    declarations: [
        CategoryComponent,
        CategoryListComponent,
        SingleCategoryComponent,
    ],
    exports: [CategoryComponent, CategoryListComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes), SharedModule_1]
})
export class TasksModule {}
