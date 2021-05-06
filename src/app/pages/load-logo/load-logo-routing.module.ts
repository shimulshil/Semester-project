import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadLogoPage } from './load-logo.page';

const routes: Routes = [
  {
    path: '',
    component: LoadLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadLogoPageRoutingModule {}
