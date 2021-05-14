import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { actualstatusPage } from './actualstatus.page';

const routes: Routes = [
  {
    path: '',
    component: actualstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class actualstatusPageRoutingModule {}
