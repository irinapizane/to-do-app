import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
