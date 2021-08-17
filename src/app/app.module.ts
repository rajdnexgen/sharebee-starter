import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreateItemComponent} from "./create-item/create-item.component";
import {BeeBtnComponent} from "./helpers/bee-btn/bee-btn.component";
import {ContainerComponent} from "./helpers/pop-up/container/container.component";
import {PopupLayoutComponent} from "./helpers/pop-up/popup-layout/popup-layout.component";
import {PopupHelperComponent, ViewModalComponent} from "./helpers/pop-up/view-modal/view-modal.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    BeeBtnComponent,
    ContainerComponent,
    PopupLayoutComponent,
    ViewModalComponent,
    PopupHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
