import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../interfaces/users';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

  users: User

  showUser(user){
    console.log(user);

    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;
  };

  constructor(
    private userServices: UserService,
    private modalService: NgbModal
    
    ) { }

  ngOnInit(){
    this.userServices.getUsers().subscribe(response => {
      this.users = response.results;
      // console.log(this.users.length);
    });
  };
};
