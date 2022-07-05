import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationStart, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ViewcartComponent } from '../viewcart/viewcart.component';

@Component({
  selector: 'app-selectcardlist',
  templateUrl: './selectcardlist.component.html',
  styleUrls: ['./selectcardlist.component.scss']
})
export class SelectcardlistComponent implements OnInit {
  Obj : object = {};
  products: any = [];
  favoriteitem: any = [];
  category: any = [];
  toggleheart: boolean = true;
  isloading: boolean = false;
  search: string = '';
  url : string = 'http://localhost:5000/v1/images/';

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );


  constructor(private route: ActivatedRoute,
    public router: Router,
    private _ds: DataService, 
    private activatedRoute:ActivatedRoute, 
    public _user: UserService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
     this.route.params.subscribe(res=>{
      console.log(res['id']);
      this.displaycards(res['id']);
    })
  }

  async displaycards(id: any){
     this.isloading = true;
     try {
        await this._ds.getdata('getcategory', id).subscribe((data: any)=>{
            let res = data.payload;
            if( res.length !== 0){
                setTimeout(()=>{
                  this.isloading = false;
                  this.products = res;
                }, 1000)
            }
        });
        
     } catch (error) {
        console.log(error);
     }

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
      this._ds
        .postdata('delfavorites', prod)
        .toPromise()
        .then((result: any) => {
          this.inititaldata();
        });
    } else {
      this._ds
        .postdata('addfavorites', content)
        .toPromise()
        .then((result: any) => {
          this.inititaldata();
        });
    }
  }


  inititaldata() {
    this.isloading = true;
    setTimeout(()=>{
        this._ds.getdata('getproduct', 0).subscribe((data=>{
            this.products = data.payload;
        }))

        this._ds.getdata('favorites', 0).subscribe((data=>{
            this.favoriteitem = data.payload;
        }))

        this._ds.getdata('getcategory', 0).subscribe((data=>{
            this.category = data.payload;
        }))
        this.isloading = false;
    }, 1000)

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
