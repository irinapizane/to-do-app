import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { SingleCategoryComponent } from './single-category.component';

describe('SingleCategoryComponent', () => {
  let component: SingleCategoryComponent;
  let fixture: ComponentFixture<SingleCategoryComponent>;
  let activatedRoute: ActivatedRoute;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    spy = spyOn(console, 'log');
    await TestBed.configureTestingModule({
      declarations: [SingleCategoryComponent],
      imports: [RouterTestingModule, MatMenuModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ title: 'shopping' }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleCategoryComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the category property when the route parameter matches an existing category', fakeAsync(() => {
    tick();
    expect(component.category).toEqual({
      id: 3,
      title: 'shopping',
      items: 4,
      tasks: [
        {
          id: 1,
          title: 'Grocery shopping for the week',
          date: new Date(Date.parse('2023-05-18')),
        },
        {
          id: 2,
          title: 'Buy new clothes for work',
          date: new Date(Date.parse('2023-04-06')),
        },
        {
          id: 3,
          title: 'Research new home appliances',
          date: new Date(Date.parse('2023-09-07')),
        },
        {
          id: 4,
          title: 'Order takeout from favorite restaurant',
          date: new Date(Date.parse('2023-08-04')),
        },
      ],
    });
  }));

  it('should log a message when the route parameter does not match an existing category', () => {
    activatedRoute.params = of({ title: 'non existing' });
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Category not found');
  });
});
