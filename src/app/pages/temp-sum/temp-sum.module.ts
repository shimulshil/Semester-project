import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempSumPageRoutingModule } from './temp-sum-routing.module';

import { TempSumPage } from './temp-sum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempSumPageRoutingModule
  ],
  declarations: [TempSumPage]
})
export class TempSumPageModule {}
