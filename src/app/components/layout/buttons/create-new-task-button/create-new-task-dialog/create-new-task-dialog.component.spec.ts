import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateNewTaskDialogComponent } from './create-new-task-dialog.component';
import { categories } from 'src/app/shared/data/categoriesMocks';
import { CreateCategoryDialogComponent } from '../create-category-dialog/create-category-dialog.component';

describe('CreateNewTaskDialogComponent', () => {
  let component: CreateNewTaskDialogComponent;
  let fixture: ComponentFixture<CreateNewTaskDialogComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      declarations: [CreateNewTaskDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj('MatDialog', ['open']),
        },
      ],
    }).compileComponents();

    dialog = TestBed.inject(MatDialog);
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

  it('should initialize the dateCtrl with current date', () => {
    const currentDate = new Date();
    const tolerance = 5;
    component.dateCtrl.value
      ? expect(
          Math.abs(component.dateCtrl.value.getTime() - currentDate.getTime())
        ).toBeLessThan(tolerance)
      : fail('dateCtrl.value is null');
  });

  it('should open the create category dialog', () => {
    component.openCreateCategoryDialog();
    expect(dialog.open).toHaveBeenCalledWith(CreateCategoryDialogComponent, {
      width: '25rem',
    });
  });
});
