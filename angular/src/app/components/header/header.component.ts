import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count: number = 0;

  constructor(public _data: DataService) {}

  ngOnInit(): void {
    this._data.countmessage.subscribe((message) => {
      this.count = message;
    });
  }
}
