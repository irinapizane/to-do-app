import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreateNewTaskComponent } from './create-new-task.component';
import { CreateNewTaskDialogComponent } from '../create-new-task-dialog/create-new-task-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateNewTaskComponent', () => {
  let component: CreateNewTaskComponent;
  let fixture: ComponentFixture<CreateNewTaskComponent>;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule ],
      declarations: [CreateNewTaskComponent, CreateNewTaskDialogComponent],
      providers: [MatDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewTaskComponent);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog', () => {
    const spy = spyOn(matDialog, 'open').and.callThrough();
    component.openDialog();
    expect(spy).toHaveBeenCalled()
  })

});
