import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
    console.log( termino );

    this.activatedRoute.navigate(['products', termino]);
    termino = ' ';
  }

}
