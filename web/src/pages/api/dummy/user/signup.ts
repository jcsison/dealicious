import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../../shared/domain';

export const users: User[] = [
  {
    id: '1',
    first_name: 'Test',
    last_name: 'User',
    email: 'test@test.com',
    date_of_birth: new Date(1990, 1, 1)
  }
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const newUser: User = {
    id: `${users.length + 1}`,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    date_of_birth: req.body.date_of_birth
  };

  if (users.find((user: User) => user.email === newUser.email)) {
    res
      .status(500)
      .json({ message: `User with email ${req.body.email} already exists!` });
  } else if (newUser) {
    users.push(newUser);
    res.status(200).json(newUser);
  } else {
    res.status(500).json({ message: 'Error creating new user.' });
  }
};
