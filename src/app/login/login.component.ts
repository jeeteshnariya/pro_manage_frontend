import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message : string ="";
  public email : string ="";
  public password : string ="";

  constructor(private router:Router,
              private userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.email, this.password)
    .subscribe((resp)=>{
      console.log('Succecfully Logging in');
      this.message = resp.msg;
      this.router.navigate(['dashboard'],
      {
        queryParams : {page : 1}
      });
    },(err) => {
      console.error('Error logging in',err);
      this.message = err.error.msg;
    });
  }

}
