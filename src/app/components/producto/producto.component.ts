import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Producto } from '../../services/products.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  producto: Producto;

  constructor(private activatedRoute: ActivatedRoute,
              private _products: ProductsService
              ) {

    this.activatedRoute.params.subscribe( params => {
        this.producto = this._products.getProduct(params['id']);
        console.log(this.producto);
    });
  }

  ngOnInit() {
  }

}
