import { Injectable } from '@angular/core';
import { Producto } from './products.service';

@Injectable()
export class CarritoService {

    carritoCompras: Producto[] = [];
    total = 0;

  constructor() {
    console.log('Productos listos en El carrito de compras');
   }

   agregar( product: any) {
       this.carritoCompras.push(product);
       console.log(this.carritoCompras);
   }

   borrarProducto( idx: string ) {

    let symbol = this.carritoCompras[idx].price.split('$');
    let num = parseFloat(symbol[1]);

    this.total -= num;

    this.carritoCompras.splice(idx, 1);

    return this.total;


   }

    totalPrice() {

     for (let i = 0; i < this.carritoCompras.length; i++) {

         let symbol = this.carritoCompras[i].price.split('$');
         let num = parseFloat(symbol[1]);
         console.log(num);
         this.total += num;
     }
     return this.total;
    }

}
