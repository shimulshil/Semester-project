import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickZonePage } from './pick-zone.page';

const routes: Routes = [
  {
    path: '',
    component: PickZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickZonePageRoutingModule {}
