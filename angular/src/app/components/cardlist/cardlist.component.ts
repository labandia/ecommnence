import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
  search: string = '';
  toggleheart: boolean = false;
  loading: boolean = false;
  products: any = [];
  selectedItem: any;

  state: string = 'orig';

  constructor(public _data: DataService) {}

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts() {
    this._data.getdata('getproduct').subscribe((dt: any) => {
      this.products = dt.payload;
    });
  }

  favorite() {
    this.toggleheart = !this.toggleheart;
  }

  addcart(items: any, id: number) {
    this._data.setcart(items);

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
