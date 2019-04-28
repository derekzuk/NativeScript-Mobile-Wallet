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
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, _page, trtlService) {
        this.routerExtensions = routerExtensions;
        this._page = _page;
        this.trtlService = trtlService;
        this.dataItems = [];
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
    HomeComponent.prototype.refreshFavorites = function (args) {
        console.log("refreshFavorites");
        var that = new WeakRef(this);
        setTimeout(function () {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELHFEQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsMEdBQTBHO0FBQzFHLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsNkRBQTBEO0FBQzFELHFEQUF1RDtBQVN2RDtJQUlFLHVCQUFvQixnQkFBa0MsRUFDNUMsS0FBVyxFQUNYLFdBQXdCO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUl1QixDQUFDO0lBRXZDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNkO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNFLElBQUksS0FBSyxHQUFHO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsYUFBYSxFQUFFLHFCQUFxQjtZQUNwQyxpQkFBaUIsRUFBRSwyQkFBMkI7U0FDL0MsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHO1lBQ1YsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsYUFBYSxFQUFFLGlCQUFpQjtZQUNoQyxpQkFBaUIsRUFBRSxpQkFBaUI7U0FDckMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFSSx3Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBdUI7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQztZQUNQLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVDLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQsSUFBSTtJQUlKLDRCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaURBQXlCLEdBQXpCO1FBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUQsc0NBQXNDO1FBQ3RDLCtCQUErQjtRQUMvQixxRkFBcUY7UUFDckYsZUFBZTtRQUNmLFFBQVE7UUFDUixzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLHlCQUF5QjtRQUN6QixvREFBb0Q7UUFDcEQsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOENBQThDO1FBQzlDLHlCQUF5QjtRQUN6Qiw0REFBNEQ7UUFDNUQsVUFBVTtRQUNWLFNBQVM7UUFDVCxRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsOENBQThDO1FBQzlDLFVBQVU7UUFDVixTQUFTO1FBQ1QsUUFBUTtRQUNSLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHlDQUF5QztRQUN6QyxVQUFVO1FBQ1YsUUFBUTtRQUNSLE1BQU07UUFDTixNQUFNO1FBQ04sbUJBQW1CO0lBR3JCLENBQUM7SUF6R1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLc0MseUJBQWdCO1lBQ3JDLFdBQUk7WUFDRSwwQkFBVztPQU52QixhQUFhLENBMkd6QjtJQUFELG9CQUFDO0NBQUEsQUEzR0QsSUEyR0M7QUEzR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9kb21haW4vdHJhbnNhY3Rpb24nO1xuLy8gaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLy8gaW1wb3J0IHsgU2VuZFBhZ2UgfSBmcm9tICcuLi9zZW5kL3NlbmQnO1xuLy8gaW1wb3J0IHsgUmVjZWl2ZVBhZ2UgfSBmcm9tICcuLi9yZWNlaXZlL3JlY2VpdmUnO1xuLy8gaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3MnO1xuLy8gaW1wb3J0IHsgTmF0aXZlUGFnZVRyYW5zaXRpb25zLCBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXBhZ2UtdHJhbnNpdGlvbnMnO1xuLy8gaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWJyYXRpb24nO1xuLy8gaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBUcnRsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJ0bC90cnRsLnNlcnZpY2UnXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF0YUl0ZW1zID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgdHJ0bFNlcnZpY2U6IFRydGxTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3B1bGF0ZVRlc3REYXRhKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvKHVybCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdXJsXSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlJyxcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvcHVsYXRlVGVzdERhdGEoKSB7XG4gICAgbGV0IGRhdGExID0ge1xuICAgICAgXCJ0eXBlXCI6IFwic2VuZFwiLCBcbiAgICAgIFwiYW1vdW50XCI6IDQ0LCBcbiAgICAgIFwidG9BZGRyZXNzXCI6IFwidG9BZGRyZXNzMDk4MTNsamZcIiwgXG4gICAgICBcImZyb21BZGRyZXNzXCI6IFwiZnJvbUFkZHJlc3Mwdm1zZGpmbFwiLFxuICAgICAgXCJ0cmFuc2FjdGlvbkhhc2hcIjogXCJ0cmFuc2FjdGlvbkhhc2gyOWN2bnhzZGtmXCJcbiAgICB9O1xuICAgIGxldCBkYXRhMiA9IHtcbiAgICAgIFwidHlwZVwiOiBcIm1haWxcIiwgXG4gICAgICBcImFtb3VudFwiOiAyNDg3LCBcbiAgICAgIFwidG9BZGRyZXNzXCI6IFwidG9BZGR5MjAzOTg0Y3Z4XCIsIFxuICAgICAgXCJmcm9tQWRkcmVzc1wiOiBcImZyb21BZGR5MzI5NGNuc1wiLFxuICAgICAgXCJ0cmFuc2FjdGlvbkhhc2hcIjogXCJ0SGFzaDMyMDk4amNzZGZcIlxuICAgIH07XG4gICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXcgVHJhbnNhY3Rpb24oZGF0YTEpKTtcbiAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKG5ldyBUcmFuc2FjdGlvbihkYXRhMikpO1xuICB9XG5cbnB1YmxpYyByZWZyZXNoRmF2b3JpdGVzKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoRmF2b3JpdGVzXCIpO1xuICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgbGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgfSwgMTAwMCk7XG59XG5cbiAgLy8gcHVibGljIG9uSXRlbVRhcCgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInRhcHBlZCBpdGVtLiBOb3Qgc3VyZSB3aGljaC5cIik7XG4gIC8vIH1cblxuXG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRlc3QoKVwiKTtcbiAgfVxuXG4gIHRlc3RJdGVtKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW4gdGVzdEl0ZW0oKVwiKTtcbiAgfVxuXG4gIHByZXNlbnRUcmFuc2FjdGlvbk9wdGlvbnMoKSB7XG4gICAgZGlhbG9ncy5hbGVydChcIllvdXIgbWVzc2FnZVwiKS50aGVuKCgpPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgfSk7XG5cbiAgICAvLyBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgIC8vICAgdGl0bGU6ICdUUlRMIFRyYW5zYWN0aW9uJyxcbiAgICAvLyAgIG1lc3NhZ2U6ICdXaGF0IGFjdGlvbiB3b3VsZCB5b3UgbGlrZSB0byB0YWtlIHJlbGF0ZWQgdG8gdGhpcyBUUlRMIFRyYW5zYWN0aW9uPycsXG4gICAgLy8gICBidXR0b25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnU2VuZCBUUlRMIHRvIEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdzZW5kVHJ0bFRvQWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3NlbmRUcnRsVG9BZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnVmlldyBUcmFuc2FjdGlvbiBvbiBFeHBsb3JlcicsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3ZpZXdUcmFuc2FjdGlvbk9uRXhwbG9yZXIgY2xpY2tlZCcpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHRleHQ6ICdDb3B5IEFkZHJlc3MnLFxuICAgIC8vICAgICAgIHJvbGU6ICdjb3B5QWRkcmVzcycsXG4gICAgLy8gICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvcHlBZGRyZXNzIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAvLyAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAvLyAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsIGNsaWNrZWQnKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9KTtcbiAgICAvLyBhbGVydC5wcmVzZW50KCk7XG5cblxuICB9XG5cbn1cbiJdfQ==