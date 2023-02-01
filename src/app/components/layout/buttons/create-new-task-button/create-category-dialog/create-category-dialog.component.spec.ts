import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

import { CreateCategoryDialogComponent } from './create-category-dialog.component';

describe('CreateCategoryDialogComponent', () => {
  let component: CreateCategoryDialogComponent;
  let dialogRef: MatDialogRef<CreateCategoryDialogComponent>;
  let fixture: ComponentFixture<CreateCategoryDialogComponent>;

  beforeEach(async () => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [CreateCategoryDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCategoryDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog and pass the category name', () => {
    component.categoryNameCtrl.setValue('Test Category');
    component.saveCategory();
    expect(dialogRef.close).toHaveBeenCalledWith('Test Category');
  });
});
