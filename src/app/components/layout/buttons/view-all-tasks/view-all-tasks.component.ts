import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrls: ['./view-all-tasks.component.scss']
})
export class ViewAllTasksComponent {
  @Input() text: string;

  constructor() { }
}
