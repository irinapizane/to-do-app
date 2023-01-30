import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';
import { categories } from 'src/app/shared/data/categoriesMocks';
import { CreateCategoryDialogComponent } from '../create-category-dialog/create-category-dialog.component';

@Component({
  selector: 'app-create-new-task-dialog',
  templateUrl: './create-new-task-dialog.component.html',
  styleUrls: ['./create-new-task-dialog.component.scss'],
})
export class CreateNewTaskDialogComponent {
  categories = categories.map((category) => category.title);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private matDialogRef: MatDialogRef<CreateNewTaskComponent>,
    private dialog: MatDialog
  ) {}

  openCreateCategoryDialog() {
    this.dialog.open(CreateCategoryDialogComponent, {
      width: '25rem',
    });
  }
}
