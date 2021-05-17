import { NextApiRequest, NextApiResponse } from 'next';

import db from '../db';
import { User } from '../../../../shared/domain';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const loggedInUser = db.users.find(
    (user: User) => user.email === req.body.email
  );

  if (loggedInUser && req.body.password?.length >= 0) {
    res.status(200).json(loggedInUser);
  } else {
    res.status(404).json({ message: 'User does not exist!' });
  }
};
