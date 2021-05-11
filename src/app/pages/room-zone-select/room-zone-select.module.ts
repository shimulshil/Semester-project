import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomZoneSelectPageRoutingModule } from './room-zone-select-routing.module';

import { RoomZoneSelectPage } from './room-zone-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomZoneSelectPageRoutingModule
  ],
  declarations: [RoomZoneSelectPage]
})
export class RoomZoneSelectPageModule {}
