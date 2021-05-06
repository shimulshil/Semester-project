import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyZonePage } from './only-zone.page';

const routes: Routes = [
  {
    path: '',
    component: OnlyZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlyZonePageRoutingModule {}
