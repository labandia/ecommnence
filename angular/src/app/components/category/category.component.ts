import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: any = [];
  selectedItem: any = 0;
  subscription: Subscription | undefined;

  constructor(public _ds: DataService, private route: Router) {}

  ngOnInit(): void {
    this._ds.getdata('getCategory', 0).subscribe((data: any)=>{
       this.category = data.payload
    })
  }

  // ngOnDestroy(): void {
  //     this.subscription?.unsubscribe();
  // }

  selectcategory(cat: any) {
    this.category.forEach((element: any) => {
      element.clicked = false;
    });
    this.selectedItem = 1;
    cat.clicked = true;
    this.route.navigate(['shop', cat.category_id]);
    // this.route.navigateByUrl(`shop/${cat.name}`, { state: cat });
    // this.route.navigate(['shop', cat.category_id], {queryParams: {cat}})

  }
}
