import { Pipe, PipeTransform } from '@angular/core';
import { Producto, ProductsService } from '../services/products.service';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  constructor(private _products: ProductsService) {

  }
  transform(value: Producto, arg: boolean): Producto[] {

    let ordenados: Producto[] = [];
    let desordenados: Producto[] = [];

    desordenados = value;

        if (arg) {
          function compare (a,b) {
            if (a.name < b.name) {
              return -1;

            }
            if (a.name > b.name) {

              return 1;
            }
            return 0;
          }


          ordenados = desordenados.sort(compare);
              return ordenados;
        }else{

          return value;
        }

  }

}
