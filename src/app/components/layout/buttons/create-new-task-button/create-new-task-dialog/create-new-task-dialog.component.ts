import { Component } from '@angular/core';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-task-dialog',
  templateUrl: './create-new-task-dialog.component.html',
  styleUrls: ['./create-new-task-dialog.component.scss'],
})
export class CreateNewTaskDialogComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.matDialog.open(CreateNewTaskComponent, {
    });
  }
}
