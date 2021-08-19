import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateItemComponent} from "./create-item.component";
import { ListingComponent } from './listing/listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingInformationComponent } from './listing-information/listing-information.component';
import { SharedModule } from '../helpers/shared.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const CREATE_ITEM_COMPONENT= [
  CreateItemComponent,
  ListingComponent,
  ListingDetailComponent,
  ListingInformationComponent
];

@NgModule({
  declarations: CREATE_ITEM_COMPONENT,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ],
  exports: CREATE_ITEM_COMPONENT
})
export class CreateItemModule { }
