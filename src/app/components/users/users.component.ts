import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: any
  constructor(private userServices: UserService) { }

  ngOnInit(){
    this.userServices.getUsers().subscribe(response => {
      this.users = response.results;
    });
  }
}