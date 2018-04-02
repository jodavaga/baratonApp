import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService, Producto } from '../services/products.service';


@Pipe({
    name: 'disponible'
})

export class DisponiblePipe implements PipeTransform {
    constructor(private _products: ProductsService) {

    }

    transform(value: Producto, arg: boolean = true ): Producto[] {

        let filtrados: Producto[] = [];

        if (arg) {
            for (let producto of value) {
                const disponible: boolean = producto.available;
                if (disponible) {
                   filtrados.push(producto);
                }
              }
              return filtrados;
        }
    return value;

    }
}

