import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { SelectcardlistComponent } from './components/selectcardlist/selectcardlist.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { LoginComponent } from './modules/login/login.component';
import { ShopComponent } from './modules/shop/shop.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
          path: 'all',
          component: CardlistComponent
      },
      {
          path: ':id',
          component: SelectcardlistComponent
      }
    ]
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
