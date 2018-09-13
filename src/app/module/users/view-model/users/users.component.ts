import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../services/user';
import { UserRepositoryService } from '../../services/user-repository.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  private _users: Observable<User[]>;
  get users(): Observable<User[]> {
    return this._users;
  }

  constructor(private userRepository: UserRepositoryService) {
  }

  ngOnInit(): void {
    this._users = this.userRepository.users();
  }
}
