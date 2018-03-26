import { Component, OnInit } from '@angular/core';
import { ProductsService, Producto } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Producto[];

  constructor(private _products: ProductsService) { }

  ngOnInit() {

    this.products = this._products.getProducts();
    console.log(this.products);
  }



}
