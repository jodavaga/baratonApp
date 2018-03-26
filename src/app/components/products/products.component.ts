import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Producto[];

  constructor(private _products: ProductsService,
              private router: Router
              ) { }

  ngOnInit() {

    this.products = this._products.getProducts();
    // console.log(this.products);
  }

  // Redirecciono al elemento clickeado
  verProducto( id: string) {
    console.log(id);
    this.router.navigate( ['product', id] );
  }



}
