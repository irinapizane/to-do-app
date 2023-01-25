import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { categories } from '../../data/categoriesMocks';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let route: ActivatedRoute;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => 'Test Category' }) },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    tick();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to the route paramMap and set the tasks property', () => {
    let category = categories.find((c) => c.title === 'Test Category');
    spyOn(route.paramMap, 'subscribe').and.callThrough();
    fixture.detectChanges();
    expect(route.paramMap.subscribe).toHaveBeenCalled();
    expect(component.tasks).toEqual(category?.tasks || []);
  });
});
