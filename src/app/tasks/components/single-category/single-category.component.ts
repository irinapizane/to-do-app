import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { categories } from '../../../shared/data/categoriesMocks';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss'],
})
export class SingleCategoryComponent implements OnInit, OnDestroy {
  category?: Category;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      const foundCategory = categories.find(
        (c: { title: string }) =>
          c.title.toLowerCase() === params.title.toLowerCase()
      );
      if (foundCategory) {
        this.category = {
          ...foundCategory,
          tasks: foundCategory.tasks?.sort(
            (a, b) => a.date.getTime() - b.date.getTime()
          ),
        };
      } else {
        console.log('Category not found');
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
