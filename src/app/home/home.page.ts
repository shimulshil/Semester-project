import { Component } from '@angular/core';  
import { PopoverController } from '@ionic/angular';  
import { NotificationsComponent } from '../notifications/notifications.component';  
  
@Component({  
  selector: 'app-home',  
  templateUrl: 'home.page.html',  
  styleUrls: ['home.page.scss'],  
})  
export class HomePage {  
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