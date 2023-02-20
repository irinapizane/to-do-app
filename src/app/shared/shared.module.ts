import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
    declarations: [TaskCardComponent ],
    exports: [MaterialModule, TaskCardComponent],
    imports: [CommonModule, MaterialModule]
})
export class SharedModule {}