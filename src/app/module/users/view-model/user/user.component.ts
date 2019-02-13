import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _user: User;
  get user(): User {
    return this._user;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._user = this.route.snapshot.data['user'];
  }
}
