import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemSolutionPage } from './system-solution.page';

const routes: Routes = [
  {
    path: '',
    component: SystemSolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemSolutionPageRoutingModule {}
