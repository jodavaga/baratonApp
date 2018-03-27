import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-productos-buscados',
  templateUrl: './productos-buscados.component.html',
  styles: [``]
})
export class ProductosBuscadosComponent implements OnInit {

  const productos: Producto[] = [];
  const termino: string = ' ';

  constructor(private _products: ProductsService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.productos = this._products.buscarProductos(params['termino'] );
      console.log( this.productos );
    });
  }



}

