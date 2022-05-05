import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    trigger('buttonState', [
      state(
        'inactive',
        style({
          backgroundColor: 'red',
        })
      ),
      state(
        'active',
        style({
          backgroundColor: 'green',
        })
      ),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class ContactsComponent implements OnInit {
  show: boolean = false;
  selectedItem: any;
  state: String = 'inactive';

  constructor() {}

  ngOnInit(): void {}

  toggleshow() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  updateCart(id: number) {
    this.selectedItem = id;
  }
}
