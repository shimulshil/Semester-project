import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate;
  formattedDate;
  formattedTime;
  constructor(public navCtrl: NavController) {
    this.currentDate = new Date();
    this.getFormattedDate();
    this.getFormattedTime();
  }
  getFormattedDate(){
    const dateObj = new Date();

    const year = dateObj.getFullYear().toString();
    const month = dateObj.getMonth().toString();
    const date = dateObj.getDate().toString();

    const monthArray = ['Jan', 'Feb', 'Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    this.formattedDate = year + '-' +monthArray[month] + '-'+ date;
    console.log(this.formattedDate);
  }
  getFormattedTime(){
    const timeObj = new Date();

    const hours = timeObj.getHours().toString();
    const mimute = timeObj.getMinutes().toString();

    // const monthArray = ['Jan', 'Feb', 'Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    this.formattedTime = hours + ':' +mimute;
    console.log(this.getFormattedTime);
  }
}
