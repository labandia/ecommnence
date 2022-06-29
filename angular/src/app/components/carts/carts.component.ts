import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  list: any = [];
  gtotal: number = 0;

  constructor(private _cart: CartService, 
    public dialogRef: MatDialogRef<CartsComponent>, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.list = this._cart.getalldata();
    this.getTotalPrice();
  }

  getTotalPrice(){
     let grandTotal = 0;
     this.list.map((a: any)=>{
         grandTotal += a.price
     })
     this.gtotal = grandTotal;
  }

  purchaseitems(){
    this._cart.clearallcart();
    this._snackBar.open('Thanks for purchase', 'close', {
        duration: 1000
    });
    this.dialogRef.close('');
  }

}
