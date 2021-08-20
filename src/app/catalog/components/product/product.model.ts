import {BaseModel} from '@core/abstract/BaseModel';

export interface ProductModel extends BaseModel{
  description: string;
  price: number;
  stock: number;
}
