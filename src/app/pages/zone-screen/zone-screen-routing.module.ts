import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoneScreenPage } from './zone-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ZoneScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoneScreenPageRoutingModule {}
