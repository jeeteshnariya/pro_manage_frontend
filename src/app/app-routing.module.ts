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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent,
  canActivate: [AuthGuard]},
  {path:'faculty', component:FacultyComponent,
  canActivate: [AuthGuard]},
  {path: 'setting', component:SettingComponent ,
  canActivate: [AuthGuard]},
  {path: 'student', component:StudentComponent ,
  canActivate: [AuthGuard]},
  {path:'project', component:ProjectComponent ,
  canActivate: [AuthGuard]},
  {path: 'project/view', component:OpenproComponent ,
  canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
