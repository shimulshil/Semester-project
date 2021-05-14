import { Component, OnInit } from '@angular/core';
// import { PopoverController } from '@ionic/angular/providers/popover-controller';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-actualstatus',
  templateUrl: './actualstatus.page.html',
  styleUrls: ['./actualstatus.page.scss'],
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class actualstatusPage implements OnInit {
  constructor(public popoverCtrl: PopoverController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
