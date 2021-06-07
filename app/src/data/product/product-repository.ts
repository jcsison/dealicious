import { QueryTypes, Sequelize } from 'sequelize';
import { Product, UUID } from '../../../../web/src/shared/domain';
export interface ProductRepository {
  getProducts(): Promise<Product[] | null>;
  getProductById(productId: UUID): Promise<Product | null>;
}

interface ProductRepositoryDeps {
  sequelize: Sequelize;
}

export const productRepository = (
  deps: ProductRepositoryDeps
): ProductRepository => ({
  getProductById: async (productId: UUID) => {
    const products: Product[] = await deps.sequelize.query(
      'SELECT * FROM products WHERE id=:id',
      { replacements: { id: productId }, type: QueryTypes.SELECT }
    );

    return products.length > 0 ? products[0] : null;
  },
  getProducts: async () => {
    const products: Product[] = await deps.sequelize.query(
      'SELECT * FROM products',
      { type: QueryTypes.SELECT }
    );

    return products.length > 0 ? products : null;
  }
});
