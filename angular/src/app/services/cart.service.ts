import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: any = [];
  secondcart: any = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  public countsource = new BehaviorSubject<number>(0);
  countmessage = this.countsource.asObservable();

  // SAMPLE OF ADD ITEMS CART
  setcart(item: any) {
    let messagestatus = '';
    let itemfound = this.cart.find((x: any) => {
      return x.name == item.name;
    });

    if (itemfound) {
      itemfound.quantity += 1;
      itemfound.price += item.price;
      messagestatus = 'Already added';
      return;
    } else {
      this.cart.push({
        id: this.cart.length + 1,
        name: item.name,
        quantity: 1,
        origprice: item.price,
        price: item.price,
      });
    }

    // else {
    //   item.cartstore = 1;
    //   item.total = item.price;
    //   this.cart.push(item);
    //   messagestatus = 'Add items';
    // }
    this.countsource.next(this.cart.length);
    // this.getalldata();
    // return messagestatus;
  }


  

  clearallcart() {
    this.cart = [];
    this.countsource.next(0);
    return this.cart;
  }

  getalldata() {
    return this.cart;
  }
}
