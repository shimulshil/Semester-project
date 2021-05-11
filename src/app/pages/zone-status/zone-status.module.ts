import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoneStatusPageRoutingModule } from './zone-status-routing.module';

import { ZoneStatusPage } from './zone-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoneStatusPageRoutingModule
  ],
  declarations: [ZoneStatusPage]
})
export class ZoneStatusPageModule {}
