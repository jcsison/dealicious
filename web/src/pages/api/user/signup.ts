import { NextApiRequest, NextApiResponse } from 'next';

import db from '../db';
import { User } from '../../../../shared/domain';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const newUser: User = {
    id: `${(Number(db.users.slice(-1)[0]?.id) ?? 0) + 1}`,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth
  };

  if (db.users.find((user: User) => user.email === newUser.email)) {
    res
      .status(500)
      .json({ message: `User with email ${req.body.email} already exists!` });
  } else if (newUser) {
    db.users.push(newUser);
    res.status(200).json(newUser);
  } else {
    res.status(500).json({ message: 'Error creating new user.' });
  }
};
