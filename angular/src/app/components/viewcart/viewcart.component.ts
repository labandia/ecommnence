import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss'],
})
export class ViewcartComponent implements OnInit {
  cartitem: any = [];
  loading: boolean = false;

  constructor(
    private dialogReg: MatDialogRef<ViewcartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cart: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  additem() {
    this._cart.setcart(this.data);

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Add items', 'close', {
        duration: 1000,
      });
      this.dialogReg.close('');
    }, 1000);
  }
}
