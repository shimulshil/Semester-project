import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})

export class SelectionPage {
    constructor(public popoverCtrl: PopoverController) { }
    async notifications(ev: any) {
      const popover = await this.popoverCtrl.create({
          component: NotificationsComponent,
          event: ev,
          animated: true,
          showBackdrop: true
      });
      return await popover.present();
    }
  }
