import {BaseModel} from '@core/interfaces/base-model';

export interface ImageModel extends BaseModel{
  url: string;
  main: boolean;
}
