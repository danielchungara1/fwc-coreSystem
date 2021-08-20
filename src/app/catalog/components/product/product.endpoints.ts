import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class ProductEndpoints implements CrudEndpoints {
  ALL = environment.API + '/products';
  BASE = environment.API + '/products';
  NEW = environment.API + '/products';
}
