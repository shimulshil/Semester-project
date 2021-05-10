import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemresetedPage } from './systemreseted.page';

const routes: Routes = [
  {
    path: '',
    component: SystemresetedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemresetedPageRoutingModule {}
