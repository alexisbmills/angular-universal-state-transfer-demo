import { Component, Inject, OnInit } from '@angular/core';
import { USER_SERVICE, UserAccess } from './services/user-access';
import { Observable } from 'rxjs/Observable';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
