"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
// import { NavController } from 'ionic-angular';
// import { SendPage } from '../send/send';
// import { ReceivePage } from '../receive/receive';
// import { SettingsPage } from '../settings/settings';
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
// import { Vibration } from '@ionic-native/vibration';
// import { AlertController } from 'ionic-angular';
var trtl_service_1 = require("../service/trtl/trtl.service");
var dialogs = require("tns-core-modules/ui/dialogs");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, _page, trtlService) {
        this.routerExtensions = routerExtensions;
        this._page = _page;
        this.trtlService = trtlService;
        this.dataItems = ['a', "b", "c", "d"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    HomeComponent.prototype.navigateTo = function (url) {
        this.routerExtensions.navigate([url], {
            transition: {
                name: 'fade',
                curve: 'linear'
            }
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0Msb0RBQW9EO0FBQ3BELHVEQUF1RDtBQUN2RCwwR0FBMEc7QUFDMUcsdURBQXVEO0FBQ3ZELG1EQUFtRDtBQUNuRCw2REFBMEQ7QUFDMUQscURBQXVEO0FBUXZEO0lBSUUsdUJBQW9CLGdCQUFrQyxFQUM1QyxLQUFXLEVBQ1gsV0FBd0I7UUFGZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpsQyxjQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUlLLENBQUM7SUFFdkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEdBQUc7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsVUFBVSxFQUFFO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxRQUFRO2FBQ2Q7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsNEJBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpREFBeUIsR0FBekI7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFRCxzQ0FBc0M7UUFDdEMsK0JBQStCO1FBQy9CLHFGQUFxRjtRQUNyRixlQUFlO1FBQ2YsUUFBUTtRQUNSLHNDQUFzQztRQUN0QyxtQ0FBbUM7UUFDbkMseUJBQXlCO1FBQ3pCLG9EQUFvRDtRQUNwRCxVQUFVO1FBQ1YsU0FBUztRQUNULFFBQVE7UUFDUiw4Q0FBOEM7UUFDOUMseUJBQXlCO1FBQ3pCLDREQUE0RDtRQUM1RCxVQUFVO1FBQ1YsU0FBUztRQUNULFFBQVE7UUFDUiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIseUNBQXlDO1FBQ3pDLFVBQVU7UUFDVixRQUFRO1FBQ1IsTUFBTTtRQUNOLE1BQU07UUFDTixtQkFBbUI7SUFHckIsQ0FBQztJQXpFVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUtzQyx5QkFBZ0I7WUFDckMsV0FBSTtZQUNFLDBCQUFXO09BTnZCLGFBQWEsQ0EyRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG4vLyBpbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vLyBpbXBvcnQgeyBTZW5kUGFnZSB9IGZyb20gJy4uL3NlbmQvc2VuZCc7XG4vLyBpbXBvcnQgeyBSZWNlaXZlUGFnZSB9IGZyb20gJy4uL3JlY2VpdmUvcmVjZWl2ZSc7XG4vLyBpbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncyc7XG4vLyBpbXBvcnQgeyBOYXRpdmVQYWdlVHJhbnNpdGlvbnMsIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtcGFnZS10cmFuc2l0aW9ucyc7XG4vLyBpbXBvcnQgeyBWaWJyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ZpYnJhdGlvbic7XG4vLyBpbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFRydGxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS90cnRsL3RydGwuc2VydmljZSdcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhSXRlbXMgPSBbJ2EnLCBcImJcIiwgXCJjXCIsIFwiZFwiXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIFxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSB0cnRsU2VydmljZTogVHJ0bFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIG5hdmlnYXRlVG8odXJsKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt1cmxdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGUnLFxuICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRlc3QoKVwiKTtcbiAgfVxuXG4gIHRlc3RJdGVtKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW4gdGVzdEl0ZW0oKVwiKTtcbiAgfVxuXG4gIHByZXNlbnRUcmFuc2FjdGlvbk9wdGlvbnMoKSB7XG4gICAgZGlhbG9ncy5hbGVydChcIllvdXIgbWVzc2FnZVwiKS50aGVuKCgpPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgfSk7XG5cbiAgICAvLyBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgIC8vICAgdGl0bGU6ICdUUlRMIFRyYW5zYWN0aW9uJyxcbiAgICAvLyAgIG1lc3NhZ2U6ICdXaGF0IGFjdGlvbiB3b3VsZCB5b3UgbGlrZSB0byB0YWtlIHJlbGF0ZWQgdG8gdGhpcyBUUlRMIFRyYW5zYWN0aW9uPycsXG4gICAgLy8gICBidXR0b25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnU2VuZCBUUlRMIHRvIEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdzZW5kVHJ0bFRvQWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3NlbmRUcnRsVG9BZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnVmlldyBUcmFuc2FjdGlvbiBvbiBFeHBsb3JlcicsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdUcmFuc2FjdGlvbk9uRXhwbG9yZXIgY2xpY2tlZCcpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHRleHQ6ICdDb3B5IEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdjb3B5QWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvcHlBZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAvLyAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAvLyAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9KTtcbiAgICAvLyBhbGVydC5wcmVzZW50KCk7XG5cblxuICB9XG5cbn1cbiJdfQ==