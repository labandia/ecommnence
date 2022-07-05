import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './modules/shop/shop.component';
import { LoginComponent } from './modules/login/login.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { CartsComponent } from './components/carts/carts.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectcardlistComponent } from './components/selectcardlist/selectcardlist.component';
import { UserService } from './services/user.service';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

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
    SelectcardlistComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
