import {ImageModel} from './image/image.model';
import {BaseModel} from '@core/interfaces/base-model';

export interface ProductModel extends BaseModel{
  description: string;
  price: number;
  stock: number;
  images: ImageModel[];
}
