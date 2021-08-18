import { Component, Input, OnInit } from '@angular/core';
import { ItemObject } from 'src/app/models/item.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  @Input() itemObject: ItemObject = {} as ItemObject;
  @Input() validateItem: any;
  focusedElement = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToFAQ() {
    // this._router.navigate([RoutePaths.FAQ]);
  }

}
