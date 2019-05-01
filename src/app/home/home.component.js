"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var transaction_1 = require("../domain/transaction");
// import { NavController } from 'ionic-angular';
// import { SendPage } from '../send/send';
// import { ReceivePage } from '../receive/receive';
// import { SettingsPage } from '../settings/settings';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
// import { Vibration } from '@ionic-native/vibration';
// import { AlertController } from 'ionic-angular';
var trtl_service_1 = require("../service/trtl/trtl.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, _page, trtlService) {
        this.routerExtensions = routerExtensions;
        this._page = _page;
        this.trtlService = trtlService;
        this.dataItems = [];
        this.vibrator = new nativescript_vibrate_1.Vibrate();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.populateTestData();
    };
    HomeComponent.prototype.navigateTo = function (url) {
        this.routerExtensions.navigate([url], {
            transition: {
                name: 'slideBottom',
                curve: 'linear'
            }
        });
    };
    HomeComponent.prototype.populateTestData = function () {
        var data1 = {
            "type": "send",
            "amount": 44,
            "toAddress": "toAddress09813ljf",
            "fromAddress": "fromAddress0vmsdjfl",
            "transactionHash": "transactionHash29cvnxsdkf"
        };
        var data2 = {
            "type": "mail",
            "amount": 2487,
            "toAddress": "toAddy203984cvx",
            "fromAddress": "fromAddy3294cns",
            "transactionHash": "tHash32098jcsdf"
        };
        this.dataItems.push(new transaction_1.Transaction(data1));
        this.dataItems.push(new transaction_1.Transaction(data2));
    };
    HomeComponent.prototype.refreshTransactions = function (event) {
        console.log("refreshTransactions");
        this.vibrator.vibrate(2000);
        var that = new WeakRef(this);
        setTimeout(function () {
            var listView = event.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    };
    HomeComponent.prototype.onTap = function (event) {
        console.log("onTap() index: " + event.index);
    };
    // public onItemTap() {
    //   console.log("tapped item. Not sure which.");
    // }
    HomeComponent.prototype.test = function () {
        console.log("in test()");
    };
    HomeComponent.prototype.testItem = function () {
        console.log("in testItem()");
    };
    HomeComponent.prototype.presentTransactionOptions = function () {
        dialogs.alert("Your message").then(function () {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            trtl_service_1.TrtlService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELHFEQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsMEdBQTBHO0FBQzFHLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsNkRBQTBEO0FBQzFELHFEQUF1RDtBQUV2RCw2REFBK0M7QUFRL0M7SUFLRSx1QkFBb0IsZ0JBQWtDLEVBQzVDLEtBQVcsRUFDWCxXQUF3QjtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGxDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7SUFJYSxDQUFDO0lBRXZDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFFBQVE7YUFDZDtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLEtBQUssR0FBRztZQUNWLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLGFBQWEsRUFBRSxxQkFBcUI7WUFDcEMsaUJBQWlCLEVBQUUsMkJBQTJCO1NBQy9DLENBQUM7UUFDRixJQUFJLEtBQUssR0FBRztZQUNWLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLGFBQWEsRUFBRSxpQkFBaUI7WUFDaEMsaUJBQWlCLEVBQUUsaUJBQWlCO1NBQ3JDLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUksMkNBQW1CLEdBQTFCLFVBQTJCLEtBQXdCO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixVQUFVLENBQUM7WUFDUCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzlCLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSw2QkFBSyxHQUFaLFVBQWEsS0FBd0I7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVDLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQsSUFBSTtJQUlKLDRCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaURBQXlCLEdBQXpCO1FBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUQsc0NBQXNDO1FBQ3RDLCtCQUErQjtRQUMvQixxRkFBcUY7UUFDckYsZUFBZTtRQUNmLFFBQVE7UUFDUixzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLHlCQUF5QjtRQUN6QixvREFBb0Q7UUFDcEQsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOENBQThDO1FBQzlDLHlCQUF5QjtRQUN6Qiw0REFBNEQ7UUFDNUQsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsOENBQThDO1FBQzlDLFVBQVU7UUFDVixTQUFTO1FBQ1QsUUFBUTtRQUNSLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHlDQUF5QztRQUN6QyxVQUFVO1FBQ1YsUUFBUTtRQUNSLE1BQU07UUFDTixNQUFNO1FBQ04sbUJBQW1CO0lBR3JCLENBQUM7SUEvR1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FNc0MseUJBQWdCO1lBQ3JDLFdBQUk7WUFDRSwwQkFBVztPQVB2QixhQUFhLENBaUh6QjtJQUFELG9CQUFDO0NBQUEsQUFqSEQsSUFpSEM7QUFqSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9kb21haW4vdHJhbnNhY3Rpb24nO1xuLy8gaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLy8gaW1wb3J0IHsgU2VuZFBhZ2UgfSBmcm9tICcuLi9zZW5kL3NlbmQnO1xuLy8gaW1wb3J0IHsgUmVjZWl2ZVBhZ2UgfSBmcm9tICcuLi9yZWNlaXZlL3JlY2VpdmUnO1xuLy8gaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3MnO1xuLy8gaW1wb3J0IHsgTmF0aXZlUGFnZVRyYW5zaXRpb25zLCBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXBhZ2UtdHJhbnNpdGlvbnMnO1xuLy8gaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWJyYXRpb24nO1xuLy8gaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBUcnRsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJ0bC90cnRsLnNlcnZpY2UnXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IFZpYnJhdGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdmlicmF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGFJdGVtcyA9IFtdO1xuICB2aWJyYXRvciA9IG5ldyBWaWJyYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgdHJ0bFNlcnZpY2U6IFRydGxTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3B1bGF0ZVRlc3REYXRhKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvKHVybCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdXJsXSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdzbGlkZUJvdHRvbScsXG4gICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwb3B1bGF0ZVRlc3REYXRhKCkge1xuICAgIGxldCBkYXRhMSA9IHtcbiAgICAgIFwidHlwZVwiOiBcInNlbmRcIiwgXG4gICAgICBcImFtb3VudFwiOiA0NCwgXG4gICAgICBcInRvQWRkcmVzc1wiOiBcInRvQWRkcmVzczA5ODEzbGpmXCIsIFxuICAgICAgXCJmcm9tQWRkcmVzc1wiOiBcImZyb21BZGRyZXNzMHZtc2RqZmxcIixcbiAgICAgIFwidHJhbnNhY3Rpb25IYXNoXCI6IFwidHJhbnNhY3Rpb25IYXNoMjljdm54c2RrZlwiXG4gICAgfTtcbiAgICBsZXQgZGF0YTIgPSB7XG4gICAgICBcInR5cGVcIjogXCJtYWlsXCIsIFxuICAgICAgXCJhbW91bnRcIjogMjQ4NywgXG4gICAgICBcInRvQWRkcmVzc1wiOiBcInRvQWRkeTIwMzk4NGN2eFwiLCBcbiAgICAgIFwiZnJvbUFkZHJlc3NcIjogXCJmcm9tQWRkeTMyOTRjbnNcIixcbiAgICAgIFwidHJhbnNhY3Rpb25IYXNoXCI6IFwidEhhc2gzMjA5OGpjc2RmXCJcbiAgICB9O1xuICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2gobmV3IFRyYW5zYWN0aW9uKGRhdGExKSk7XG4gICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXcgVHJhbnNhY3Rpb24oZGF0YTIpKTtcbiAgfVxuXG5wdWJsaWMgcmVmcmVzaFRyYW5zYWN0aW9ucyhldmVudDogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hUcmFuc2FjdGlvbnNcIik7XG4gICAgdGhpcy52aWJyYXRvci52aWJyYXRlKDIwMDApO1xuICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgIH0sIDEwMDApO1xufVxuXG5wdWJsaWMgb25UYXAoZXZlbnQ6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gIGNvbnNvbGUubG9nKFwib25UYXAoKSBpbmRleDogXCIgKyBldmVudC5pbmRleCk7XG59XG5cbiAgLy8gcHVibGljIG9uSXRlbVRhcCgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInRhcHBlZCBpdGVtLiBOb3Qgc3VyZSB3aGljaC5cIik7XG4gIC8vIH1cblxuXG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRlc3QoKVwiKTtcbiAgfVxuXG4gIHRlc3RJdGVtKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW4gdGVzdEl0ZW0oKVwiKTtcbiAgfVxuXG4gIHByZXNlbnRUcmFuc2FjdGlvbk9wdGlvbnMoKSB7XG4gICAgZGlhbG9ncy5hbGVydChcIllvdXIgbWVzc2FnZVwiKS50aGVuKCgpPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgfSk7XG5cbiAgICAvLyBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgIC8vICAgdGl0bGU6ICdUUlRMIFRyYW5zYWN0aW9uJyxcbiAgICAvLyAgIG1lc3NhZ2U6ICdXaGF0IGFjdGlvbiB3b3VsZCB5b3UgbGlrZSB0byB0YWtlIHJlbGF0ZWQgdG8gdGhpcyBUUlRMIFRyYW5zYWN0aW9uPycsXG4gICAgLy8gICBidXR0b25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnU2VuZCBUUlRMIHRvIEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdzZW5kVHJ0bFRvQWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3NlbmRUcnRsVG9BZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnVmlldyBUcmFuc2FjdGlvbiBvbiBFeHBsb3JlcicsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdUcmFuc2FjdGlvbk9uRXhwbG9yZXIgY2xpY2tlZCcpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHRleHQ6ICdDb3B5IEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdjb3B5QWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvcHlBZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAvLyAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAvLyAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9KTtcbiAgICAvLyBhbGVydC5wcmVzZW50KCk7XG5cblxuICB9XG5cbn1cbiJdfQ==