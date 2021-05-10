import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickZonePageRoutingModule } from './pick-zone-routing.module';

import { PickZonePage } from './pick-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickZonePageRoutingModule
  ],
  declarations: [PickZonePage]
})
export class PickZonePageModule {}
