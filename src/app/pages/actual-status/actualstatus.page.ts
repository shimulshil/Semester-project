import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-actualstatus',
  templateUrl: './actualstatus.page.html',
  styleUrls: ['./actualstatus.page.scss'],
})
export class ActualstatusPage {
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
