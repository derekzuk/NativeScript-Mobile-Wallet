import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
// import { NavController } from 'ionic-angular';
// import { SendPage } from '../send/send';
// import { ReceivePage } from '../receive/receive';
// import { SettingsPage } from '../settings/settings';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
// import { Vibration } from '@ionic-native/vibration';
// import { AlertController } from 'ionic-angular';
import { TrtlService } from '../service/trtl/trtl.service'
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  dataItems = ['a', "b", "c", "d"];

  constructor(private routerExtensions: RouterExtensions, 
    private _page: Page,
    private trtlService: TrtlService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  navigateTo(url) {
    this.routerExtensions.navigate([url], {
        transition: {
        name: 'fade',
        curve: 'linear'
        }
    });
  }




  test() {
    console.log("in test()");
  }

  testItem() {
    console.log("in testItem()");
  }

  presentTransactionOptions() {
    dialogs.alert("Your message").then(()=> {
      console.log("Dialog closed!");
  });

    // let alert = this.alertCtrl.create({
    //   title: 'TRTL Transaction',
    //   message: 'What action would you like to take related to this TRTL Transaction?',
    //   buttons: [
    //     {
    //       text: 'Send TRTL to Address',
    //       role: 'sendTrtlToAddress',
    //       handler: () => {
    //         console.log('sendTrtlToAddress clicked');
    //       }
    //     },
    //     {
    //       text: 'View Transaction on Explorer',
    //       handler: () => {
    //         console.log('viewTransactionOnExplorer clicked');
    //       }
    //     },
    //     {
    //       text: 'Copy Address',
    //       role: 'copyAddress',
    //       handler: () => {
    //         console.log('copyAddress clicked');
    //       }
    //     },
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('cancel clicked');
    //       }
    //     }
    //   ]
    // });
    // alert.present();


  }

}
