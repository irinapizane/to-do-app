import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { CreateNewTaskDialogComponent } from './components/layout/buttons/create-new-task-button/create-new-task-dialog/create-new-task-dialog.component';
import { CreateNewTaskComponent } from './components/layout/buttons/create-new-task-button/create-new-task/create-new-task.component';
import { CreateCategoryDialogComponent } from './components/layout/buttons/create-new-task-button/create-category-dialog/create-category-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CreateNewTaskComponent,
    CreateNewTaskDialogComponent,
    CreateCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TasksModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }