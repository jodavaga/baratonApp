import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [``]
})
export class CarritoComponent implements OnInit {

  productos: any[] = [];

  constructor(private _carrito: CarritoService) {
    this.productos = this._carrito.carritoCompras;
  }

  ngOnInit() {
  }

  borrarProducto( idx: string) {
    this._carrito.borrarProducto(idx);
  }


}
