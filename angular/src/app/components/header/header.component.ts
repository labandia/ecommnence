import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CartsComponent } from '../carts/carts.component';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { ThemeService } from '../../themes/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  theme: boolean = true;
  count: number = 0;
  users: any = [];
  userslocal: any = [];

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public _data: DataService,
    public _user: UserService,
    public _cart: CartService,
    public dialog: MatDialog,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.information();
    this.setdarkmode();
  }

  information() {
    this._cart.countmessage.subscribe((message) => {
      this.count = message;
    });
    this._user.userstatus.subscribe((users: any) => {
      this.users = users;
    });
    this.userslocal = this._user.getUserinfo().length;
    console.log(this.userslocal);
  }

  setdarkmode() {
    let data = JSON.parse(localStorage.getItem('theme') || '');

    if (data.name == 'dark') {
      this.themeService.setDarkTheme();
      this.theme = false;
    } else {
      this.themeService.setOriginalTheme();
      this.theme = true;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.theme = false;
      this.themeService.setOriginalTheme();
    } else {
      this.theme = true;
      this.themeService.setDarkTheme();
    }

    this.setdarkmode();
  }

  opencart() {
    const dialogRef = this.dialog.open(CartsComponent, {
      panelClass: 'dialogpadding',
      maxWidth: '45rem',
      maxHeight: '100vh',
      data: this._cart.getalldata(),
    });
    const responsiveDialogSubscription = this.isExtraSmall.subscribe(
      (result) => {
        if (result.matches) {
          dialogRef.updateSize('98%', 'auto');
        } else {
          dialogRef.updateSize('60%', 'auto');
        }
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      responsiveDialogSubscription.unsubscribe();
    });
  }

  Logout() {
    this.userslocal = [];
    this._user.usersource.next([]);
    localStorage.removeItem('users');
  }

  darkmode(id: number) {
    if (id == 0) {
      this.theme = false;
    }
    if (id == 1) {
      this.theme = true;
    }
  }
}
