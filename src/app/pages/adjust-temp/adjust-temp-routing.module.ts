import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjustTempPage } from './adjust-temp.page';

const routes: Routes = [
  {
    path: '',
    component: AdjustTempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjustTempPageRoutingModule {}
