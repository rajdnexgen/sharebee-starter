import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BeeBtnComponent} from "./bee-btn/bee-btn.component";
import {ContainerComponent} from "./pop-up/container/container.component";
import {PopupLayoutComponent} from "./pop-up/popup-layout/popup-layout.component";
import {PopupHelperComponent, ViewModalComponent} from "./pop-up/view-modal/view-modal.component";

const SHARED_COMPONENT = [
  BeeBtnComponent,
  ContainerComponent,
  PopupLayoutComponent,
  ViewModalComponent,
  PopupHelperComponent
];

@NgModule({
  declarations: SHARED_COMPONENT,
  imports: [
    CommonModule
  ],
  exports: SHARED_COMPONENT
})
export class SharedModule { }
