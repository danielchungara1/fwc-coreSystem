import {BaseModel} from '@core/abstract/BaseModel';
import {ImageModel} from './image/image.model';

export interface ProductModel extends BaseModel{
  description: string;
  price: number;
  stock: number;
  images: ImageModel[];
}
