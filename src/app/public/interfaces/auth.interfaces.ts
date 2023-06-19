export interface loginI{
  email:string,
  password:string
}
// Generated by https://quicktype.io

export interface LoginResponseI {
  dataUser: UserI;
  token:    string;
}

export interface UserI {
  id:    number;
  user:  string;
  email: string;
}

 // Generated by https://quicktype.io

export interface RegisterI{
  email:string,
  password:string,
  user:string
}
export interface RegisterResponseI {
  users: Users;
  token: string;
}

export interface Users {
  state:    boolean;
  id:       number;
  user:     string;
  email:    string;
  password: string;
}
