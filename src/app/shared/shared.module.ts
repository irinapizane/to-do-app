import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
    declarations: [TaskComponent, TaskCardComponent ],
    exports: [MaterialModule, TaskComponent, TaskCardComponent],
    imports: [CommonModule, MaterialModule]
})
export class SharedModule {}