import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateItemComponent} from "./create-item/create-item.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
