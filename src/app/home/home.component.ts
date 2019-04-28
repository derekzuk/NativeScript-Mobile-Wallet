import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { Transaction } from '../domain/transaction';
// import { NavController } from 'ionic-angular';
// import { SendPage } from '../send/send';
// import { ReceivePage } from '../receive/receive';
// import { SettingsPage } from '../settings/settings';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
// import { Vibration } from '@ionic-native/vibration';
// import { AlertController } from 'ionic-angular';
import { TrtlService } from '../service/trtl/trtl.service'
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ListViewEventData } from 'nativescript-ui-listview';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  dataItems = [];

  constructor(private routerExtensions: RouterExtensions, 
    private _page: Page,
    private trtlService: TrtlService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.populateTestData();
  }

  navigateTo(url) {
    this.routerExtensions.navigate([url], {
        transition: {
        name: 'fade',
        curve: 'linear'
        }
    });
  }

  populateTestData() {
    let data1 = {
      "type": "send", 
      "amount": 44, 
      "toAddress": "toAddress09813ljf", 
      "fromAddress": "fromAddress0vmsdjfl",
      "transactionHash": "transactionHash29cvnxsdkf"
    };
    let data2 = {
      "type": "mail", 
      "amount": 2487, 
      "toAddress": "toAddy203984cvx", 
      "fromAddress": "fromAddy3294cns",
      "transactionHash": "tHash32098jcsdf"
    };
    this.dataItems.push(new Transaction(data1));
    this.dataItems.push(new Transaction(data2));
  }

public refreshFavorites(args: ListViewEventData) {
    console.log("refreshFavorites");
    const that = new WeakRef(this);
    setTimeout(function () {
        const listView = args.object;
        listView.notifyPullToRefreshFinished();
    }, 1000);
}

  // public onItemTap() {
  //   console.log("tapped item. Not sure which.");
  // }



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
