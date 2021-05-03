import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../../shared/domain';
import { users } from './signup';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const loggedInUser = users.find(
    (user: User) => user.email === req.body.email
  );

  if (loggedInUser && req.body.password?.length >= 0) {
    res.status(200).json(loggedInUser);
  } else {
    res.status(404).json({ message: 'User does not exist!' });
  }
};
