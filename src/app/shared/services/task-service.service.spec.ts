import { TestBed } from '@angular/core/testing';

import { TaskService } from './task-service.service';

describe('TaskServiceService', () => {
  let service: TaskService;
  let categories;

  beforeEach(() => {
    categories = [
      { name: 'Category 1', tasks: [{ name: 'Task 1' }, { name: 'Task 2' }] },
      { name: 'Category 2' },
    ];
    TestBed.configureTestingModule({
      providers: [{ provide: 'CATEGORIES', useValue: categories }],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return empty task list if there are no tasks in the category', () => {
    const tasks = service.getTasks();
    expect(tasks).toEqual([]);
  });
});
