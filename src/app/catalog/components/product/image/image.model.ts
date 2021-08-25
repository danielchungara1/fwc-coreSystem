import {BaseModel} from '@core/abstract/BaseModel';

export interface ImageModel extends BaseModel{
  url: string;
  main: boolean;
}
