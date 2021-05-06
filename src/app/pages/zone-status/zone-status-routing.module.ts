import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoneStatusPage } from './zone-status.page';

const routes: Routes = [
  {
    path: '',
    component: ZoneStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoneStatusPageRoutingModule {}
