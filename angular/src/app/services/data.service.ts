import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interface/category';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  cart: any = [];

  private countsource = new BehaviorSubject<number>(0);
  countmessage = this.countsource.asObservable();

  constructor(private http: HttpClient) {}

  getdata(api: string) {
    return this.http.get<Category[]>(`http://localhost:5000/v1/prod/${api}`);
  }

  setcart(item: any) {
    let messagestatus = '';
    let exist = this.cart.find((x: any) => {
      return x.product_id == item.product_id;
    });

    if (exist) {
      item.cartstore += 1;
      messagestatus = 'Already added';
    } else {
      item.cartstore = 1;
      this.cart.push(item);
      messagestatus = 'Add items';
    }
    this.countsource.next(this.cart.length);
    return messagestatus;
  }
}
