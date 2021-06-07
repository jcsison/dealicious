import { Request, Response } from 'express';
import { createController } from 'awilix-express';

import { ProductService } from '../data/product/product-service';

interface ResourceDeps {
  productService: ProductService;
}

const productResourceDefinition = (deps: ResourceDeps) => ({
  getProducts: async (_req: Request, res: Response) => {
    const result = await deps.productService.getProducts();

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: 'Products not found.' });
    }
  },
  getProductById: async (req: Request, res: Response) => {
    const result = await deps.productService.getProductById(
      req.params.productId
    );

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: 'Product not found.' });
    }
  }
});

export const productResource = createController(productResourceDefinition)
  .prefix('/api/product')
  .get('/', 'getProducts')
  .get('/:productId', 'getProductById');
