import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateNewTaskDialogComponent } from '../create-new-task-dialog/create-new-task-dialog.component';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.scss'],
})
export class CreateNewTaskComponent {
  categories = ['category1', 'category2', 'category3'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private matDialogRef: MatDialogRef<CreateNewTaskDialogComponent>
  ) {}
}
