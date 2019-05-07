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
import { Vibrate } from 'nativescript-vibrate';
import { WalletBackend, ConventionalDaemon, BlockchainCacheApi } from 'turtlecoin-wallet-backend';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  dataItems = [];
  vibrator = new Vibrate();

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
        name: 'slideTop',
        curve: 'Ease-in-out'
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

public refreshTransactions(event: ListViewEventData) {
    console.log("refreshTransactions");
    this.vibrator.vibrate(2000);
    const that = new WeakRef(this);
    setTimeout(function () {
        const listView = event.object;
        listView.notifyPullToRefreshFinished();
    }, 1000);
}

public onTap(event: ListViewEventData) {
  console.log("onTap() index: " + event.index);
}

public walletTest() { 
  (async () => {
    const daemon: ConventionalDaemon = new ConventionalDaemon('127.0.0.1', 11898);

    /* OR
    const daemon: BlockchainCacheApi = new BlockchainCacheApi('blockapi.turtlepay.io', true);
    */
    
    const wallet: WalletBackend = WalletBackend.createWallet(daemon);

    console.log('Created wallet');

    await wallet.start();

    console.log('Started wallet');

    wallet.saveWalletToFile('mywallet.wallet', 'hunter2');

    /* Make sure to call stop to let the node process exit */
    wallet.stop();
  })().catch(err => {
      console.log('Caught promise rejection: ' + err);
  });
}

}
