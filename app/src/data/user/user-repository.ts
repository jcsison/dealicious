import * as uuid from 'uuid';
import { QueryTypes, Sequelize } from 'sequelize';

import {
  User,
  UserLogin,
  UserSignup,
  UUID
} from '../../../../web/src/shared/domain';
import { generateInsertExpression } from '../data-utils';

export interface UserRepository {
  // changePassword(password: string, userId: string): Promise<null>;
  // forgotPassword(email: string): Promise<null>;
  getUserById(userId: UUID): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  loginUser(userLogin: UserLogin): Promise<User | null>;
  registerUser(userSignup: UserSignup): Promise<User | null>;
  deleteUser(userId: UUID): Promise<void>;
}

interface UserRepositoryDeps {
  sequelize: Sequelize;
  uuid: typeof uuid;
}

export const userRepository = (deps: UserRepositoryDeps): UserRepository => ({
  getUserById: async (userId: UUID) => {
    const users: User[] = await deps.sequelize.query(
      'SELECT * FROM users WHERE id=:id',
      { replacements: { id: userId }, type: QueryTypes.SELECT }
    );

    return users.length > 0 ? users[0] : null;
  },
  getUserByEmail: async (email: string) => {
    const users: User[] = await deps.sequelize.query(
      'SELECT * FROM users WHERE email=:email',
      { replacements: { email: email }, type: QueryTypes.SELECT }
    );

    return users.length > 0 ? users[0] : null;
  },
  loginUser: async (userLogin: UserLogin) => {
    const users: User[] = await deps.sequelize.query(
      'SELECT * FROM users WHERE email=:email',
      { replacements: { email: userLogin.email }, type: QueryTypes.SELECT }
    );

    return users.length > 0 ? users[0] : null;
  },
  registerUser: async (userSignup: UserSignup) => {
    const newUser: Omit<User, 'created_at'> = {
      id: deps.uuid.v4(),
      first_name: userSignup.first_name,
      last_name: userSignup.last_name,
      email: userSignup.email,
      date_of_birth: userSignup.date_of_birth
    };

    const insertObj = { ...newUser };
    const insertExpression = generateInsertExpression(insertObj);

    await deps.sequelize.query(`INSERT INTO users ${insertExpression}`, {
      replacements: insertObj,
      type: QueryTypes.INSERT
    });

    const users: User[] = await deps.sequelize.query(
      'SELECT * FROM users WHERE id=:id',
      { replacements: { id: newUser.id }, type: QueryTypes.SELECT }
    );

    return users[0];
  },
  deleteUser: async (userId: UUID) => {
    await deps.sequelize.query('DELETE FROM users WHERE id=:id', {
      replacements: { id: userId },
      type: QueryTypes.DELETE
    });
  }
});
