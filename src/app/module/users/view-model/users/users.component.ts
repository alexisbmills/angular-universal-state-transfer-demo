import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { USER_SERVICE, UserAccess } from '../../services/user-access';
import { User } from '../../services/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private _users: Observable<User[]>;
  get users(): Observable<User[]> {
    return this._users;
  }

  constructor(@Inject(USER_SERVICE) private userService: UserAccess) {
  }

  ngOnInit(): void {
    this._users = this.userService.users();
  }
}
