import { NextApiRequest, NextApiResponse } from 'next';

import db from '../db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(db.products);
};
