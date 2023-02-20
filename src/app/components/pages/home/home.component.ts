import { Component, Inject, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/category.model';
import { TaskService } from 'src/app/shared/services/task-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks: Task[];
  showCategories: boolean = true;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.tasks.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  toggle() {
    this.showCategories = !this.showCategories;
  }
}
