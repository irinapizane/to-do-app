import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';

@Component({
  selector: 'app-create-new-task-dialog',
  templateUrl: './create-new-task-dialog.component.html',
  styleUrls: ['./create-new-task-dialog.component.scss'],
})
export class CreateNewTaskDialogComponent {
  categories = ['category1', 'category2', 'category3'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private matDialogRef: MatDialogRef<CreateNewTaskComponent>
  ) {}
}
