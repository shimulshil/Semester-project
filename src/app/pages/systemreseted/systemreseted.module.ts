import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemresetedPageRoutingModule } from './systemreseted-routing.module';

import { SystemresetedPage } from './systemreseted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemresetedPageRoutingModule
  ],
  declarations: [SystemresetedPage]
})
export class SystemresetedPageModule {}
