export type UUID = string;

interface DBModel {
  id: UUID;
}

export interface UserInput {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
}

interface UserAuth {
  password: string;
}

export interface UserLogin extends UserAuth {
  email: string;
}

export interface UserSignup extends UserInput, UserAuth {}

export interface User extends UserInput, DBModel {}

export interface Product extends DBModel {
  name: string;
  description: string;
  price: number;
  image_url?: string;
}
