import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  moduleId: module.id
})
export class InputFieldComponent implements OnInit {

  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  activeIndex;
  itemHeight;
  itemWidth;
  digits;

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.digits = deviceWidth * 0.08;

    this._page.actionBarHidden = true;
    
    // if(!platformModule.isIOS) {
      this.itemWidth = deviceWidth * 0.215;
    // } else {
      // this.itemHeight = deviceHeight * 0.1;
      // this.itemWidth = deviceWidth * 0.26;
    // }
  }

  items = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
    { number: '6' },
    { number: '7' },
    { number: '8' },
    { number: '9' },
    { number: 'DELETE' },
    { number: '0' },
    { number: '.' }
  ]
  
  setClass(item) {
    if(item.number == 'DELETE' || item.number == '.') {
      return false;
    } else {
      return true;
    }
  }

  numberTap(i) {
    this.activeIndex = i;
  }
  
  get activeIndexNumber() {
    if (this.activeIndex == 9 || this.activeIndex == 11) {
      console.log("working");
      
      return null;  
    } else {
      return this.activeIndex;
    }
  } 

  back() {
    this.routerExtensions.back();
  }
}