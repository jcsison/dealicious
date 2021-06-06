import { asFunction, asValue, createContainer } from 'awilix';
import * as uuid from 'uuid';

import { favoriteRepository } from './data/favorite/favorite-repository';
import { favoriteService } from './data/favorite/favorite-service';
import { productRepository } from './data/product/product-repository';
import { productService } from './data/product/product-service';
import { sequelize } from './database/sequelize';
import { userRepository } from './data/user/user-repository';
import { userService } from './data/user/user-service';

export const awilixContainer = createContainer().register({
  sequelize: asValue(sequelize),
  uuid: asValue(uuid),
  favoriteRepository: asFunction(favoriteRepository),
  favoriteService: asFunction(favoriteService),
  productRepository: asFunction(productRepository),
  productService: asFunction(productService),
  userRepository: asFunction(userRepository),
  userService: asFunction(userService)
});
