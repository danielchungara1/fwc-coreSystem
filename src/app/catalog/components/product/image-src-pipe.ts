import {Pipe, PipeTransform} from '@angular/core';
import {ImageModel} from './image.model';

@Pipe({
    name: 'imageSrcPipe'
})
export class ImageSrcPipe implements PipeTransform {

    transform(images: ImageModel[], ...args: unknown[]): string {
        return images?.find(value => value.main)?.url + '/thumbnail';
    }

}
