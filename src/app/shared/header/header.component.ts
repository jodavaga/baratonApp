import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalCarrito = 0;
  constructor(private activatedRoute: Router,
              private _carrito: CarritoService
              ) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
    console.log( termino );

    this.activatedRoute.navigate(['products', termino]);
    termino = ' ';
  }

  totalCompras () {
    this.totalCarrito = this._carrito.carritoCompras.length;
    return this.totalCarrito;
  }

}
