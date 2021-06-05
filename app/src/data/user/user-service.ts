import { User, UserLogin, UserSignup } from '../../../../web/src/shared/domain';
import { UserRepository } from './user-repository';

export interface UserService {
  // changePassword(password: string, userId: string): Promise<null>;
  // forgotPassword(email: string): Promise<null>;
  loginUser(userLogin: UserLogin): Promise<User | null>;
  registerUser(userSignup: UserSignup): Promise<User | null>;
}

interface UserServiceDeps {
  userRepository: UserRepository;
}

export const userService = (deps: UserServiceDeps): UserService => ({
  loginUser: async (userLogin: UserLogin) => {
    return deps.userRepository.loginUser(userLogin);
  },
  registerUser: async (userSignup: UserSignup) => {
    if (!deps.userRepository.getUserByEmail(userSignup.email)) {
      return deps.userRepository.registerUser(userSignup);
    } else {
      return null;
    }
  }
});
