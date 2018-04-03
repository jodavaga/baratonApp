import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosBuscadosComponent } from './components/productos-buscados/productos-buscados.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'product/:id', component: ProductoComponent },
    { path: 'products/:termino', component: ProductosBuscadosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(routes);
