import { NextApiRequest, NextApiResponse } from 'next';
import { getHttp } from '../../../redux/thunk/api-utils';
import { Product } from '../../../shared/domain';

import db from '../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetch(process.env.BACKEND_API);
  const resultJson = await result.json();
  const returnProducts: Product[] = resultJson.results.map((item) => {
    const convertedProduct: Product = {
      id: item.listing_id.toString(),
      name: item.title,
      description: item.description,
      price: item.price,
      image_url: null
    };

    return convertedProduct;
  });

  //console.log(returnProducts);
  //res.status(200).json(db.products);
  res.status(200).json(returnProducts);
};
