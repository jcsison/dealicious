import { QueryTypes, Sequelize } from 'sequelize';

import {
  User,
  UserInput,
  UserLogin,
  UserSignup
} from '../../../../web/src/shared/domain';
import { generateInsertExpression } from '../data-utils';

export interface UserRepository {
  // changePassword(password: string, userId: string): Promise<null>;
  // forgotPassword(email: string): Promise<null>;
  getUserByEmail(email: string): Promise<User | null>;
  loginUser(userLogin: UserLogin): Promise<User | null>;
  registerUser(userSignup: UserSignup): Promise<User | null>;
}

interface UserRepositoryDeps {
  sequelize: Sequelize;
}

export const userRepository = (deps: UserRepositoryDeps): UserRepository => ({
  getUserByEmail: async (email: string) => {
    const users: User[] = await deps.sequelize.query(
      `SELECT * FROM users WHERE email=:email`,
      { replacements: { email: email }, type: QueryTypes.SELECT }
    );

    return users.length > 0 ? users[0] : null;
  },
  loginUser: async (userLogin: UserLogin) => {
    const users: User[] = await deps.sequelize.query(
      `SELECT * FROM users WHERE email=:email`,
      { replacements: { email: userLogin.email }, type: QueryTypes.SELECT }
    );

    return users.length > 0 ? users[0] : null;
  },
  registerUser: async (userSignup: UserSignup) => {
    const newUser: UserInput = {
      first_name: userSignup.first_name,
      last_name: userSignup.last_name,
      email: userSignup.email,
      date_of_birth: userSignup.date_of_birth
    };

    const insertObj = { ...newUser };
    const insertExpression = generateInsertExpression(insertObj);

    const users: User[] = await deps.sequelize.query(
      `INSERT INTO users ${insertExpression} RETURNING *`,
      { replacements: insertObj, type: QueryTypes.SELECT }
    );

    return users[0];
  }
});
