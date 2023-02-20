import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { TaskCardComponent } from './task-card.component';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCardComponent],
      imports: [MatMenuModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    component.task = { title: 'Test task', id: 1, date: new Date()}
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
