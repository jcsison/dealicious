export type UUID = string;

interface DBModel {
  id: UUID;
  created_at: Date;
}

export interface User extends DBModel {
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

export type UserSignup = Omit<User, keyof DBModel> & UserAuth;

export interface Product extends DBModel {
  name: string;
  description: string;
  price: number;
  image_url?: string;
}

export interface Favorite extends DBModel {
  productId: UUID;
  userId: UUID;
}

export type FavoritedProduct = Favorite & Product;
