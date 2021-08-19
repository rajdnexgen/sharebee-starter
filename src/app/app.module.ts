import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateItemModule } from './create-item/create-item.module';
import { SharedModule } from './helpers/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    CreateItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
