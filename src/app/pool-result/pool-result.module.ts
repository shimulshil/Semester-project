import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoolResultPageRoutingModule } from './pool-result-routing.module';

import { PoolResultPage } from './pool-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoolResultPageRoutingModule
  ],
  declarations: [PoolResultPage]
})
export class PoolResultPageModule {}
