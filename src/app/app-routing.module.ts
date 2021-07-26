import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './dashboard/product/unit/unit.component';
import { ItemAddComponent } from './dashboard/product/item/item-add/item-add.component';
import { ItemComponent } from './dashboard/product/item/item.component';

const routes: Routes = [
  { path:"setting/unit", component: UnitComponent },
  { path:"product/item/add", component: ItemAddComponent},
  { path:"product/item", component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
