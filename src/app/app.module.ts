import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './parts/topbar/topbar.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddfacultyComponent } from './faculty/addfaculty/addfaculty.component';
import { SettingComponent } from './setting/setting.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { OpenproComponent } from './project/openpro/openpro.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';

=======
import { FooterComponent } from './parts/footer/footer.component';
import { EditUserComponent } from './student/edit-user/edit-user.component';
>>>>>>> a2244838cc8481e331902db8d47e933cf1124a65

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
    AddstudentComponent,
    FooterComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule,
    NgbModule
  ],
  providers: [
    UserStoreService,
    UserService,
    ProfileService
  ],
  bootstrap: [AppComponent]
=======
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
>>>>>>> a2244838cc8481e331902db8d47e933cf1124a65
})
export class AppModule {}
