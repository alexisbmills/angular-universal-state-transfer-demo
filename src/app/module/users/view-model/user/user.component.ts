import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { USER_SERVICE, UserAccess } from '../../services/user-access';
import { User } from '../../services/user';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _user: BehaviorSubject<User>;
  get user(): Observable<User> {
    return this._user;
  }

  constructor(private route: ActivatedRoute,
              @Inject(USER_SERVICE) private userService: UserAccess) {
  }

  ngOnInit(): void {
    console.log(`UserComponent ${this.route.snapshot.data['user']}`);
    this._user = new BehaviorSubject<User>(this.route.snapshot.data['user']);
  }
}
