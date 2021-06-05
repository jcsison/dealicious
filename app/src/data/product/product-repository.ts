export interface ProductRepository {}

interface ProductRepositoryDeps {}

export const productRepository = (
  _deps: ProductRepositoryDeps
): ProductRepository => ({});
