import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {ProductModel} from './product.model';
import {MapperService} from '@core/mapper/mapper.service';
import {ProductEndpoints} from './product.endpoints';
import {ProductDto} from './product.dto';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstract/ResponseSimpleDto';


@Injectable({
    providedIn: 'root'
})
export class ProductService extends CrudService<ProductModel> {

    constructor(protected httpService: HttpService,
                private mapperService: MapperService) {
        super(httpService, new ProductEndpoints());
    }

    protected buildDto(model: ProductModel): any {
        return this.mapperService.map(model, ProductDto);
    }

}
