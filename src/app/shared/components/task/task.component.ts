import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { categories } from '../../data/categories';
import { Task } from '../../models/category.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const categoryTitle = params.get('title');
        const category = categories.find((c) => c.title === categoryTitle);
        this.tasks = category?.tasks || [];
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
