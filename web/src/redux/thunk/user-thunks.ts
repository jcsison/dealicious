import { User, UserLogin, UserSignup } from '../../shared/domain';
import { RootState, ThunkDispatch } from '../store';
import { postHttp } from './api-utils';
import { setCurrentUserAction } from '../data/data-actions';
import { thunkCallStruct } from './thunk-utils';

export const getUserThunk = (email: string, password: string) => async (
  dispatch: ThunkDispatch,
  getState: () => RootState
) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'userLoading',
    errorState: 'userError',
    successState: 'userSuccess',
    tryBlock: async () => {
      const user: User = await postHttp('/api/user/login', {
        email: email,
        password: password
      } as UserLogin);

      if (user) {
        dispatch(setCurrentUserAction(user));
      }
    }
  });
};

export const getNewUserThunk = (
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: Date,
  password: string
) => async (dispatch: ThunkDispatch, getState: () => RootState) => {
  thunkCallStruct({
    dispatch,
    loadingState: 'newUserLoading',
    errorState: 'newUserError',
    successState: 'newUserSuccess',
    tryBlock: async () => {
      const newUser: User = await postHttp(
        '/api/user/signup',
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          date_of_birth: dateOfBirth
        } as UserSignup,
        {
          mock: true
        }
      );
    }
  });
};
