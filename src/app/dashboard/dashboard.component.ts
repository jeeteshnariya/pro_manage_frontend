import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = [
  {
    title:"Faculties", total:12, image:"assets/img/admin/faculties.png"
  },
  {
    title:"Students", total:15, image:"assets/img/admin/students.png"
  },
  {
    title:"Projects", total:20,
  },
  {
    title:"Tasks", total:25,
  } 
]
  constructor() { }

  ngOnInit(): void {
  }

}
