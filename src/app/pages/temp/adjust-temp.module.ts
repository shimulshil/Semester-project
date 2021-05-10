import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjustTempPageRoutingModule } from './adjust-temp-routing.module';

import { AdjustTempPage } from './adjust-temp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjustTempPageRoutingModule
  ],
  declarations: [AdjustTempPage]
})
export class AdjustTempPageModule {}
