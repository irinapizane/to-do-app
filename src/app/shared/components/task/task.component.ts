import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { categories } from '../../data/categories';
import { Task } from '../../models/category.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit, OnDestroy {
  tasks: Task[] | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryTitle = params.get('title');
      const category = categories.find((c) => c.title === categoryTitle);
      this.tasks = category?.tasks;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
