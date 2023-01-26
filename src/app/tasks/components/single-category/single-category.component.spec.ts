import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
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
      imports: [RouterTestingModule],
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
    expect(component.category).toEqual({ id: 3, title: 'shopping', items: 9 });
  }));

  it('should log a message when the route parameter does not match an existing category', () => {
    activatedRoute.params = of({ title: 'non existing' });
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Category not found');
  });
});
