import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../../services/products.service';
import { Router } from '@angular/router';
import { DisponiblePipe } from '../../pipes/filter-disponible.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Producto[];
  active = true;

  constructor(private _products: ProductsService,
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



}
