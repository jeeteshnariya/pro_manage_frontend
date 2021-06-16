import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.scss']
})
export class AddfacultyComponent implements OnInit {
  
  //private user:Profile;
  public facultyForm: FormGroup;
  public message = null;
    
  constructor(private fb:FormBuilder,
    private profileservice: ProfileService,
    ) { 
      this.createData();
  }
  
  ngOnInit(): void {
  }
  
  createData(){
    this.facultyForm = this.fb.group({
      fname: [null],
      mname: [null],
      lname: [null],
      address: [null],    
      gender: [null],
      phonenumber: [null],
      city:[null],
      state: [null],
      country: [null],  
      clgname:[null],
      qualification:[null],
      technology:[null],
      email:[null],
      status:[null],
      dob:[null],
      semester:6,
      course:"M.C.A",
      avtar:"/dfgdg/abc.png",
      cover:"/dsf/gdb.jpg",
      pid:5,
      role:1
    });
  }

  save(facultyForm){
    var data = this.facultyForm.value;
    data.name = data.fname + " " + data.mname + " " + data.lname;
    console.log(data);
    console.log(this.facultyForm.value);
    if (facultyForm.valid) {
      this.profileservice.create(data)
      .subscribe((result:any) => {
        this.message = result.msg;
        this.createData();
      }, (err) => {
        this.message = err.msg;
      });      
    }
    else {
     console.error('From is in an invalid state');
    }
    //console.log('Form Value', this.facultyForm.value);
  }

  
}
