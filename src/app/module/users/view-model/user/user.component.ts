import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../services/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  private _user: BehaviorSubject<User>;
  get user(): Observable<User> {
    return this._user;
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._user = new BehaviorSubject<User>(this.route.snapshot.data['user']);
  }
}
