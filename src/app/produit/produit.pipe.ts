import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
