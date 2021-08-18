import { Component, Input, OnInit } from '@angular/core';
import { ItemObject } from 'src/app/models/item.model';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.scss']
})
export class ListingDetailComponent implements OnInit {

  @Input() itemObject: ItemObject = {} as ItemObject;
  @Input() validateItem: any;
  @Input() categories: string[] = [];
  @Input() lendFreeInfo: boolean = false;
  focusedElement = '';
  lend_free = false;
  visibility = true;

  constructor() { }

  ngOnInit(): void {
  }

  get itemRentIsActive(): boolean {
    return ['day_rent', 'week_rent', 'month_rent'].indexOf(this.focusedElement) > -1;
  }

  lendFree(event: any) {
    if (event.target.checked) {
      this.lend_free = event.target.checked;
      this.itemObject.rent_rate = 0;
      this.itemObject.rent_rate_per_week = 0;
      this.itemObject.rent_rate_per_month = 0;
    } else {
      this.lend_free = !this.lend_free;
    }
  }

}
