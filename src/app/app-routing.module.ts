import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './dashboard/unit/unit.component';

const routes: Routes = [
  {
    path: "setting",
    children:[
      {path:"unit", component: UnitComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
