export interface Image {
  width: number;
  height: number;
  url: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: Image;
}
