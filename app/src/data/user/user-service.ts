import { IS_PROD } from '../..';
import {
  User,
  UserLogin,
  UserSignup,
  UUID
} from '../../../../web/src/shared/domain';
import { UserRepository } from './user-repository';

export interface UserService {
  // changePassword(password: string, userId: string): Promise<null>;
  // forgotPassword(email: string): Promise<null>;
  loginUser(userLogin: UserLogin): Promise<User | null>;
  registerUser(userSignup: UserSignup): Promise<User | null>;
  deleteUser(userId: UUID): Promise<User | null>;
}

interface UserServiceDeps {
  userRepository: UserRepository;
}

export const userService = (deps: UserServiceDeps): UserService => ({
  loginUser: async (userLogin: UserLogin) => {
    return deps.userRepository.loginUser(userLogin);
  },
  registerUser: async (userSignup: UserSignup) => {
    const existingUser = await deps.userRepository.getUserByEmail(
      userSignup.email
    );

    if (!existingUser) {
      return deps.userRepository.registerUser(userSignup);
    } else {
      return null;
    }
  },
  deleteUser: async (userId: UUID) => {
    if (!IS_PROD) {
      const user = await deps.userRepository.getUserById(userId);

      if (user) {
        await deps.userRepository.deleteUser(userId);
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
});
