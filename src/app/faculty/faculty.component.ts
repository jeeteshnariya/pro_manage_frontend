import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  
  constructor(private profileservice: ProfileService,   
              private modalService:NgbModal,
              ) {}

  //public users$:Observable<object>;
  public users: any;
  
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.profileservice.read().subscribe((res: any) => {
      this.users = res.faculty;
      console.log(res.faculty);
    });
  }

  deleteUser(user) {
    this.profileservice.delete(user.id).subscribe((res: any) => {
      console.log(res);
      this.getUser();
    });
  }

  openModal(user){
    const ref = this.modalService.open(AddfacultyComponent,{
      centered:true      
    });
    ref.componentInstance.selectedUser = user;
    ref.result.then((yes) => {
      console.log("Yes Click");
      this.getUser();
    },
      (cancel) => {
        console.log("Cancel Click");
      })
  }
}
