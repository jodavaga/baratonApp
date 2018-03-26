import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ProductsService } from './services/products.service';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
