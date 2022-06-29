import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { userconfig } from '../config';


@Injectable({ providedIn: 'root' })
export class UserService {

  public usersource = new BehaviorSubject<Array<any>>([]);
  userstatus = this.usersource.asObservable();

  constructor(private http: HttpClient) {}

  postdata(api: string, obj: any) {
    return this.http.post(`${userconfig.apiUrl}${api}`, obj);
  }

  setUserinfo(id: number) {
    this.http
      .get(`${userconfig.apiUrl}${id}`)
      .subscribe((data: any) => {
        this.usersource.next(data.payload[0]);
        this.setUserinfolocal(data.payload[0]);
      });
  }

  setUserinfolocal(data: []) {
    localStorage.setItem('users', JSON.stringify(data));
  }

  getUserinfo() {
    return JSON.parse(localStorage.getItem('users') || '{}');
  }
}
