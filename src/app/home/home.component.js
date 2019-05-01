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
                name: 'fade',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELHFEQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsMEdBQTBHO0FBQzFHLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsNkRBQTBEO0FBQzFELHFEQUF1RDtBQUV2RCw2REFBK0M7QUFRL0M7SUFLRSx1QkFBb0IsZ0JBQWtDLEVBQzVDLEtBQVcsRUFDWCxXQUF3QjtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGxDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7SUFJYSxDQUFDO0lBRXZDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNkO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksS0FBSyxHQUFHO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsYUFBYSxFQUFFLHFCQUFxQjtZQUNwQyxpQkFBaUIsRUFBRSwyQkFBMkI7U0FDL0MsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsYUFBYSxFQUFFLGlCQUFpQjtZQUNoQyxpQkFBaUIsRUFBRSxpQkFBaUI7U0FDckMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFSSwyQ0FBbUIsR0FBMUIsVUFBMkIsS0FBd0I7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQztZQUNQLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDOUIsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDZCQUFLLEdBQVosVUFBYSxLQUF3QjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUMsdUJBQXVCO0lBQ3ZCLGlEQUFpRDtJQUNqRCxJQUFJO0lBSUosNEJBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpREFBeUIsR0FBekI7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFRCxzQ0FBc0M7UUFDdEMsK0JBQStCO1FBQy9CLHFGQUFxRjtRQUNyRixlQUFlO1FBQ2YsUUFBUTtRQUNSLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMseUJBQXlCO1FBQ3pCLG9EQUFvRDtRQUNwRCxVQUFVO1FBQ1YsU0FBUztRQUNULFFBQVE7UUFDUiw4Q0FBOEM7UUFDOUMseUJBQXlCO1FBQ3pCLDREQUE0RDtRQUM1RCxVQUFVO1FBQ1YsU0FBUztRQUNULFFBQVE7UUFDUiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIseUNBQXlDO1FBQ3pDLFVBQVU7UUFDVixRQUFRO1FBQ1IsTUFBTTtRQUNOLE1BQU07UUFDTixtQkFBbUI7SUFHckIsQ0FBQztJQS9HVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU1zQyx5QkFBZ0I7WUFDckMsV0FBSTtZQUNFLDBCQUFXO09BUHZCLGFBQWEsQ0FpSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpIRCxJQWlIQztBQWpIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL2RvbWFpbi90cmFuc2FjdGlvbic7XG4vLyBpbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vLyBpbXBvcnQgeyBTZW5kUGFnZSB9IGZyb20gJy4uL3NlbmQvc2VuZCc7XG4vLyBpbXBvcnQgeyBSZWNlaXZlUGFnZSB9IGZyb20gJy4uL3JlY2VpdmUvcmVjZWl2ZSc7XG4vLyBpbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncyc7XG4vLyBpbXBvcnQgeyBOYXRpdmVQYWdlVHJhbnNpdGlvbnMsIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtcGFnZS10cmFuc2l0aW9ucyc7XG4vLyBpbXBvcnQgeyBWaWJyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ZpYnJhdGlvbic7XG4vLyBpbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFRydGxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS90cnRsL3RydGwuc2VydmljZSdcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWJyYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF0YUl0ZW1zID0gW107XG4gIHZpYnJhdG9yID0gbmV3IFZpYnJhdGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSB0cnRsU2VydmljZTogVHJ0bFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBvcHVsYXRlVGVzdERhdGEoKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG8odXJsKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt1cmxdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGUnLFxuICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcG9wdWxhdGVUZXN0RGF0YSgpIHtcbiAgICBsZXQgZGF0YTEgPSB7XG4gICAgICBcInR5cGVcIjogXCJzZW5kXCIsIFxuICAgICAgXCJhbW91bnRcIjogNDQsIFxuICAgICAgXCJ0b0FkZHJlc3NcIjogXCJ0b0FkZHJlc3MwOTgxM2xqZlwiLCBcbiAgICAgIFwiZnJvbUFkZHJlc3NcIjogXCJmcm9tQWRkcmVzczB2bXNkamZsXCIsXG4gICAgICBcInRyYW5zYWN0aW9uSGFzaFwiOiBcInRyYW5zYWN0aW9uSGFzaDI5Y3ZueHNka2ZcIlxuICAgIH07XG4gICAgbGV0IGRhdGEyID0ge1xuICAgICAgXCJ0eXBlXCI6IFwibWFpbFwiLCBcbiAgICAgIFwiYW1vdW50XCI6IDI0ODcsIFxuICAgICAgXCJ0b0FkZHJlc3NcIjogXCJ0b0FkZHkyMDM5ODRjdnhcIiwgXG4gICAgICBcImZyb21BZGRyZXNzXCI6IFwiZnJvbUFkZHkzMjk0Y25zXCIsXG4gICAgICBcInRyYW5zYWN0aW9uSGFzaFwiOiBcInRIYXNoMzIwOThqY3NkZlwiXG4gICAgfTtcbiAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKG5ldyBUcmFuc2FjdGlvbihkYXRhMSkpO1xuICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2gobmV3IFRyYW5zYWN0aW9uKGRhdGEyKSk7XG4gIH1cblxucHVibGljIHJlZnJlc2hUcmFuc2FjdGlvbnMoZXZlbnQ6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoVHJhbnNhY3Rpb25zXCIpO1xuICAgIHRoaXMudmlicmF0b3IudmlicmF0ZSgyMDAwKTtcbiAgICBjb25zdCB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgICAgICBsaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICB9LCAxMDAwKTtcbn1cblxucHVibGljIG9uVGFwKGV2ZW50OiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICBjb25zb2xlLmxvZyhcIm9uVGFwKCkgaW5kZXg6IFwiICsgZXZlbnQuaW5kZXgpO1xufVxuXG4gIC8vIHB1YmxpYyBvbkl0ZW1UYXAoKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJ0YXBwZWQgaXRlbS4gTm90IHN1cmUgd2hpY2guXCIpO1xuICAvLyB9XG5cblxuXG4gIHRlc3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbiB0ZXN0KClcIik7XG4gIH1cblxuICB0ZXN0SXRlbSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRlc3RJdGVtKClcIik7XG4gIH1cblxuICBwcmVzZW50VHJhbnNhY3Rpb25PcHRpb25zKCkge1xuICAgIGRpYWxvZ3MuYWxlcnQoXCJZb3VyIG1lc3NhZ2VcIikudGhlbigoKT0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gIH0pO1xuXG4gICAgLy8gbGV0IGFsZXJ0ID0gdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAvLyAgIHRpdGxlOiAnVFJUTCBUcmFuc2FjdGlvbicsXG4gICAgLy8gICBtZXNzYWdlOiAnV2hhdCBhY3Rpb24gd291bGQgeW91IGxpa2UgdG8gdGFrZSByZWxhdGVkIHRvIHRoaXMgVFJUTCBUcmFuc2FjdGlvbj8nLFxuICAgIC8vICAgYnV0dG9uczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdGV4dDogJ1NlbmQgVFJUTCB0byBBZGRyZXNzJyxcbiAgICAvLyAgICAgICByb2xlOiAnc2VuZFRydGxUb0FkZHJlc3MnLFxuICAgIC8vICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kVHJ0bFRvQWRkcmVzcyBjbGlja2VkJyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdGV4dDogJ1ZpZXcgVHJhbnNhY3Rpb24gb24gRXhwbG9yZXInLFxuICAgIC8vICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3VHJhbnNhY3Rpb25PbkV4cGxvcmVyIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnQ29weSBBZGRyZXNzJyxcbiAgICAvLyAgICAgICByb2xlOiAnY29weUFkZHJlc3MnLFxuICAgIC8vICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdjb3B5QWRkcmVzcyBjbGlja2VkJyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdGV4dDogJ0NhbmNlbCcsXG4gICAgLy8gICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBjbGlja2VkJyk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICBdXG4gICAgLy8gfSk7XG4gICAgLy8gYWxlcnQucHJlc2VudCgpO1xuXG5cbiAgfVxuXG59XG4iXX0=