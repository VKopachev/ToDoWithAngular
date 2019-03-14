import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { FormTaskComponent } from './form/form-task/form-task.component';
import { ViewListComponent } from './view/view-list/view-list.component';
import { ViewTaskComponent } from './view/view-task/view-task.component';
import { TaskComponent } from './view/task/task.component';
import { ListComponent } from './view/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormTaskComponent,
    ViewListComponent,
    ViewTaskComponent,
    TaskComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
