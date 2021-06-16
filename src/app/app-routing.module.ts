import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { OpenproComponent } from './project/openpro/openpro.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'faculty', component:FacultyComponent},
  {path: 'setting', component:SettingComponent},
  {path: 'student', component:StudentComponent},
  {path:'project', component:ProjectComponent},
  {path: 'project/view', component:OpenproComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
