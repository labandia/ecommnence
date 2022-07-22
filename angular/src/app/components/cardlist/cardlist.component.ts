import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { ViewcartComponent } from '../viewcart/viewcart.component';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
  animations: [
    trigger('actionAnimation', [
      state(
        'orig',
        style({
          transform: 'scale(1)',
          opacity: 1,
        })
      ),
      state(
        'small',
        style({
          transform: 'scale(0.75)',
          opacity: 0.3,
        })
      ),
      transition('* => *', animate('500ms ease-in-out')),
    ]),
  ],
})
export class CardlistComponent implements OnInit {
  category: any = [];
  products: any = [];
  favoriteitem: any = [];
  url: string = 'http://localhost:5000/v1/images/';
  search: string = '';
  toggleheart: boolean = false;
  isloading: boolean = false;
  selectedItem: any;

  state: string = 'orig';

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  constructor(
    public _data: DataService,
    public _user: UserService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.inititaldata();
  }

  inititaldata() {
    this.isloading = true;
    setTimeout(() => {
      this._data.getdata('getproduct', 0).subscribe((data) => {
        this.products = data.payload;
      });

      this._data.getdata('getfavorites', 0).subscribe((data) => {
        this.favoriteitem = data.payload;
      });

      this._data.getdata('getcategory', 0).subscribe((data) => {
        this.category = data.payload;
      });
      this.isloading = false;
    }, 1000);
  }

  addcart(items: any, id: number) {
    const dialogRef = this.dialog.open(ViewcartComponent, {
      panelClass: 'viewpadding',
      width: '100vw',
      height: '100vh',
      data: items,
    });
    const responsiveDialogSubscription = this.isExtraSmall.subscribe(
      (result) => {
        if (result.matches) {
          dialogRef.updateSize('100vw', '100%');
        } else {
          dialogRef.updateSize('100vw', '100%');
        }
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      responsiveDialogSubscription.unsubscribe();
    });

    // this._data.setcart(items);
    // this._snackBar.open('Item Added', 'Dance', {
    //   duration: 3000,
    // });
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    // }, 1000);
  }

  favorite(data: any, id: number) {
    this.toggleheart = !this.toggleheart;

    let content = {
      user_id: this._user.getUserinfo().user_id,
      product_id: data.product_id,
    };

    let prod = {
      product_id: id,
    };

    let favoritefound = this.favoriteitem.find((x: any) => {
      return x.product_id == data.product_id;
    });
    if (favoritefound) {
      this._data
        .postdata('delfavorites', prod)
        .toPromise()
        .then((result: any) => {
          this.inititaldata();
        });
    } else {
      this._data
        .postdata('addfavorites', content)
        .toPromise()
        .then((result: any) => {
          this.inititaldata();
        });
    }
  }

  filterClass(e: Event) {
    if (this.search != '') {
      this.products = this.products.filter((res: any) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.search.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }
}
