import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../../services/products.service';
import { Router } from '@angular/router';
import { DisponiblePipe } from '../../pipes/filter-disponible.pipe';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Producto[];
  active = true;

  constructor(private _products: ProductsService,
              private _carrito: CarritoService,
              private router: Router
              ) { }

  ngOnInit() {

    this.products = this._products.getProducts();
  }

  // Redirecciono al elemento clickeado
  verProducto( id: string) {
    this.router.navigate( ['product', id] );
  }

  // Filtro por Disponibilidad
  disponibilidad( active: boolean) {
     // tslint:disable-next-line:label-position
     // tslint:disable-next-line:no-unused-expression
     this.active = !this.active;
     console.log(this.active);

    return this.active;
  }

  agregar( product: any) {
    // console.log(product);
    this._carrito.agregar(product);
  }

  totalPrice() {
    this._carrito.totalPrice();
  }



}
