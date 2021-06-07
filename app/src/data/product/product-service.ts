import { Product, UUID } from '../../../../web/src/shared/domain';
import { ProductRepository } from './product-repository';

export interface ProductService {
  getProducts(): Promise<Product[] | null>;
  getProductById(productId: UUID): Promise<Product | null>;
}

interface ProductServiceDeps {
  productRepository: ProductRepository;
}

export const productService = (deps: ProductServiceDeps): ProductService => ({
  getProducts: async () => {
    return deps.productRepository.getProducts();
  },
  getProductById: async (productId: UUID) => {
    return deps.productRepository.getProductById(productId);
  }
});
