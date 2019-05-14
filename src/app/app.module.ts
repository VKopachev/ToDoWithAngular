import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { FormTaskComponent } from './form/form-task/form-task.component';
import { ViewListComponent } from './view/view-list/view-list.component';
import { ViewTaskComponent } from './view/view-task/view-task.component';
import { TaskComponent } from './view/task/task.component';
import { ListComponent } from './view/list/list.component';
import { HomeComponent } from './pagination/home/home.component';
import { ListBoxComponent } from './pagination/list-box/list-box.component';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pagination/edit/edit.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { SignUpFormComponent } from './form/sign-up-form/sign-up-form.component';
import { UserDataFormComponent } from './form/user-data-form/user-data-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:id', component: EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormTaskComponent,
    ViewListComponent,
    ViewTaskComponent,
    TaskComponent,
    ListComponent,
    HomeComponent,
    ListBoxComponent,
    EditComponent,
    LoginFormComponent,
    SignUpFormComponent,
    UserDataFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
