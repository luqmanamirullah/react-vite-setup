export interface Login {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Auth {
  user: User | null;
  token: string | null;
}
