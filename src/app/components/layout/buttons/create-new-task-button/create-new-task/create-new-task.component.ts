import { Component } from '@angular/core';
import { CreateNewTaskDialogComponent } from '../create-new-task-dialog/create-new-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.scss'],
})
export class CreateNewTaskComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.matDialog.open(CreateNewTaskDialogComponent, {
      
    });
  }
}
