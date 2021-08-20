import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class ProductEndpoints implements CrudEndpoints {
  ALL = environment.API + '/product';
  BASE = environment.API + '/product';
  NEW = environment.API + '/product';
}
