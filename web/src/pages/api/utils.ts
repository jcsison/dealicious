import db from './db';
import { DBModel, UUID } from '../../../shared/domain';

export const getDbItemById = (key: string, id: UUID) => {
  return db[key].find((v: DBModel) => v.id === id);
};
