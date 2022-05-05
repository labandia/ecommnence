import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: any = [];

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.getcategory();
  }

  getcategory() {
    this.data.getdata('getcategory').subscribe((dt: any) => {
      this.category = dt.payload;
    });
  }
}
