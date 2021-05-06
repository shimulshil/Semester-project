import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadLogoPageRoutingModule } from './load-logo-routing.module';

import { LoadLogoPage } from './load-logo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadLogoPageRoutingModule
  ],
  declarations: [LoadLogoPage]
})
export class LoadLogoPageModule {}
