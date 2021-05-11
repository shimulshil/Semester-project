import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { actualstatusPageRoutingModule } from './actualstatus-routing.module';

import { actualstatusPage } from './actualstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    actualstatusPageRoutingModule
  ],
  declarations: [actualstatusPage]
})
export class actualstatusPageModule {}
