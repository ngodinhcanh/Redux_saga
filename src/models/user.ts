export interface RegisterUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface LoginUser {
  email: string;
  password: string;
}
export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;

}
