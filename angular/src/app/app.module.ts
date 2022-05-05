import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './modules/shop/shop.component';
import { LoginComponent } from './modules/login/login.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { CartsComponent } from './components/carts/carts.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CardlistComponent,
    ShopComponent,
    LoginComponent,
    ContactsComponent,
    CartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
