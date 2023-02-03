import { Injectable } from '@angular/core';
import { categories } from '../data/categoriesMocks';
import { Task } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    categories.forEach((category) => {
      if (category.tasks) {
        this.tasks = [...this.tasks, ...category.tasks];
      }
    });
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
