import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss'],
})
export class CreateCategoryDialogComponent {
  categoryNameCtrl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
  ]);

  form = new FormGroup({
    categoryName: this.categoryNameCtrl,
  });

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveCategory() {
    this.dialogRef.close(this.categoryNameCtrl.value);
  }
}
