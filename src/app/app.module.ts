import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ProductsService } from './services/products.service';
import { CarritoService } from './services/carrito.service';

// Routes
import { APP_ROUTING } from './app.routes';

// Pipes
import { DisponiblePipe } from './pipes/filter-disponible.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosBuscadosComponent } from './components/productos-buscados/productos-buscados.component';
import { CarritoComponent } from './components/carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductoComponent,
    ProductosBuscadosComponent,
    DisponiblePipe,
    CarritoComponent,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductsService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
