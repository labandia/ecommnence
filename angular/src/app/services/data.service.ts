import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interface/category';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from '../config';

@Injectable({ providedIn: 'root' })
export class DataService {
  cart: any = [];

  private countsource = new BehaviorSubject<number>(0);
  countmessage = this.countsource.asObservable();

  constructor(private http: HttpClient) {}


  getdata(api: string, params: any): Observable<any>{
    if (params == 0) {
       return this.http.get(`${config.apiUrl}${api}`)
    } else {
      return this.http.get(`${config.apiUrl}${api}/${params}`)
    }
  }


  postdata(api: string, obj: any) {
    return this.http.post(`${config.apiUrl}${api}`, obj);
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
