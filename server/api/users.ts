import { Request, Response } from 'express';
import { User } from '../../src/app/module/users/services/user';

const USERS_FIXTURES: User[] = [
  {
    id: 'uid4-1234-5678-9101',
    firstName: 'John',
    lastName: 'Public',
    email: 'john.public@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=0'
    }
  },
  {
    id: 'uid4-1234-5678-9102',
    firstName: 'Elaine',
    lastName: 'Private',
    email: 'helen.oftroy@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=1'
    }
  },
  {
    id: 'uid4-1234-5678-9103',
    firstName: 'Saul',
    lastName: 'Good',
    email: 'saul.good@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=2'
    }
  },
  {
    id: 'uid4-1234-5678-9104',
    firstName: 'Peter',
    lastName: 'Yellow',
    email: 'p.yellow@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=3'
    }
  },
  {
    id: 'uid4-1234-5678-9105',
    firstName: 'Kylie',
    lastName: 'Underwood',
    email: 'underwood.k@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=4'
    }
  },
  {
    id: 'uid4-1234-5678-9106',
    firstName: 'Martin',
    lastName: 'Starter',
    email: 'start@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/200/300?image=5'
    }
  }
];

export function users(req: Request, res: Response) {
  setTimeout(() => {
    console.log('users endpoint reached');
    if (req.xhr) {
      console.log('req was xhr');
    }
    res.header('Content-Type', 'application/json');
    res.write(JSON.stringify(USERS_FIXTURES));
    res.end();
  }, 2000);
}

export function user(req: Request, res: Response) {
  setTimeout(() => {
    console.log('user endpoint reached');
    if (req.xhr) {
      console.log('req was xhr');
    }
    const userIndex: number = USERS_FIXTURES.findIndex((userItem: User) => userItem.id === req.params.id);
    if (userIndex < 0 ) {
      res.status(404)
        .header('Content-Type', 'application/json')
        .send(JSON.stringify({error: 'user not found'}));
    }
    res
      .header('Content-Type', 'application/json')
      .write(JSON.stringify(USERS_FIXTURES[userIndex]));
    res.end();
  }, 2000);
}
