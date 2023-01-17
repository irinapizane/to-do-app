import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CategoryComponent } from './category.component';
import { categories } from '../../data/categories';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      providers: [{ provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }]
    });

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to single category when goToSingleCategory is called', () => {
    component.goToSingleCategory(categories[0].title);
    expect(router.navigate).toHaveBeenCalledWith(['/category', categories[0].title]);
  });
});
