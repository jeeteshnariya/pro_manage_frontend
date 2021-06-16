import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  editItem() {
    const ref = this.modalService.open(EditUserComponent, { centered: true });
    ref.componentInstance.selectedUser = { name: 'xyz', id: 5 };

    ref.result.then(
      (yes) => {
        console.log('Yes Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }
}
