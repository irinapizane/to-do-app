import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CreateNewTaskDialogComponent } from './create-new-task-dialog.component';
import { categories } from 'src/app/shared/data/categoriesMocks';

describe('CreateNewTaskDialogComponent', () => {
  let component: CreateNewTaskDialogComponent;
  let fixture: ComponentFixture<CreateNewTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [CreateNewTaskDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewTaskDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain the list of categories', () => {
    expect(component.categories).toEqual(
      categories.map((category) => category.title)
    );
  });
});
