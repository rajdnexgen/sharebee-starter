import { Component, Input, OnInit } from '@angular/core';
import { ItemObject } from 'src/app/models/item.model';

@Component({
  selector: 'app-listing-information',
  templateUrl: './listing-information.component.html',
  styleUrls: ['./listing-information.component.scss']
})
export class ListingInformationComponent implements OnInit {

  @Input() itemObject: ItemObject = {} as ItemObject;
  @Input() validateItem: any;
  @Input() toc_accepted = false;
  @Input() edit_item: string = '';
  focusedElement = '';
  tcInfo: boolean = false;
  displayTermsCondition: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
