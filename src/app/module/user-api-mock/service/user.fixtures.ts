import { User } from '../../users/services/user';

export const USERS_FIXTURES: User[] = [
  {
    id: 'uid4-1234-5678-9101',
    firstName: 'John',
    lastName: 'Public',
    email: 'john.public@gmail.com',
    image: {
      width: 200,
      height: 300,
      url: 'https://picsum.photos/id/0/200/300.webp'
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
      url: 'https://picsum.photos/id/1/200/300.webp'
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
      url: 'https://picsum.photos/id/2/200/300.webp'
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
      url: 'https://picsum.photos/id/3/200/300.webp'
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
      url: 'https://picsum.photos/id/4/200/300.webp'
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
      url: 'https://picsum.photos/id/5/200/300.webp'
    }
  }
];
