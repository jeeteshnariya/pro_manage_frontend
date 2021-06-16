import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddfacultyComponent } from './faculty/addfaculty/addfaculty.component';
import { SettingComponent } from './setting/setting.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { OpenproComponent } from './project/openpro/openpro.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    StudentComponent,
    FacultyComponent,
    AddfacultyComponent,
    SettingComponent,
    ProjectComponent,
    AddprojectComponent,
    OpenproComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
