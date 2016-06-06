import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { User } from '../models/user';
//import { HeroDetailComponent } from './hero-detail.component';
import { UserService } from '../users-service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  //directives: [HeroDetailComponent]
})
export class UsersComponent implements OnInit {
  Users: User[];
  selectedUser: User;

  constructor(
    private _router: Router,
    private _userService: UserService) { }

  getUsers() {
    //this._userService.getUsers().then(users => this.Users = users);
  }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User) { this.selectedUser = user; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedUser.id }]);
  }
}
