import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoolResultPage } from './pool-result.page';

const routes: Routes = [
  {
    path: '',
    component: PoolResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoolResultPageRoutingModule {}
