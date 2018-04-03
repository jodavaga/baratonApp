import { Injectable } from '@angular/core';
import { Producto } from './products.service';

@Injectable()
export class CarritoService {

    carritoCompras: Producto[] = [];

  constructor() {
    console.log('Productos listos en El carrito de compras');
   }

   agregar( product: any) {
       this.carritoCompras.push(product);
       console.log(this.carritoCompras);
   }

}
