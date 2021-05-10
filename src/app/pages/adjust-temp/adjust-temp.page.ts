import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular'
@Component({
  selector: 'app-adjust-temp',
  templateUrl: './adjust-temp.page.html',
  styleUrls: ['./adjust-temp.page.scss'],
})
export class AdjustTempPage {
  rangeVal:string;
    constructor(public Platform:Platform) {

      this.Platform.ready().then(()=>{
        this.rangeVal = "16";
      })
    }

  }
