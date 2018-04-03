import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [``]
})
export class CarritoComponent implements OnInit {

  productos: any[] = [];
  total = 0;

  constructor(private _carrito: CarritoService,
              private router: Router
              ) {
    this.productos = this._carrito.carritoCompras;
    this.total = this._carrito.totalPrice();
  }

  ngOnInit() {
  }

  borrarProducto( idx: number) {
    this._carrito.borrarProducto( idx );
  }

  volverSumar() {
    this.total = this._carrito.total;
  }


}
