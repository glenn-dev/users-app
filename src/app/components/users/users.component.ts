import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

  users: User

  showUser(user){
    console.log(user);
  };

  constructor(private userServices: UserService) { }

  ngOnInit(){
    this.userServices.getUsers().subscribe(response => {
      this.users = response.results;
      // console.log(this.users.length);
    });
  };
};
