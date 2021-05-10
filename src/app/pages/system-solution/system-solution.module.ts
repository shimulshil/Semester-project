import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemSolutionPageRoutingModule } from './system-solution-routing.module';

import { SystemSolutionPage } from './system-solution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemSolutionPageRoutingModule
  ],
  declarations: [SystemSolutionPage]
})
export class SystemSolutionPageModule {}
