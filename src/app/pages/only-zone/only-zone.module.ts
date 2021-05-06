import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlyZonePageRoutingModule } from './only-zone-routing.module';

import { OnlyZonePage } from './only-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlyZonePageRoutingModule
  ],
  declarations: [OnlyZonePage]
})
export class OnlyZonePageModule {}
