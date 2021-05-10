import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoneScreenPageRoutingModule } from './zone-screen-routing.module';

import { ZoneScreenPage } from './zone-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoneScreenPageRoutingModule
  ],
  declarations: [ZoneScreenPage]
})
export class ZoneScreenPageModule {}
