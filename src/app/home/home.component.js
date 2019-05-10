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
var nativescript_vibrate_1 = require("nativescript-vibrate");
// import { WalletBackend, ConventionalDaemon, BlockchainCacheApi } from 'turtlecoin-wallet-backend';
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
                name: 'slideTop',
                curve: 'Ease-in-out'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELHFEQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsMEdBQTBHO0FBQzFHLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsNkRBQTBEO0FBRzFELDZEQUErQztBQUMvQyxxR0FBcUc7QUFRckc7SUFLRSx1QkFBb0IsZ0JBQWtDLEVBQzVDLEtBQVcsRUFDWCxXQUF3QjtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGxDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7SUFJYSxDQUFDO0lBRXZDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLGFBQWE7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxhQUFhLEVBQUUscUJBQXFCO1lBQ3BDLGlCQUFpQixFQUFFLDJCQUEyQjtTQUMvQyxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixhQUFhLEVBQUUsaUJBQWlCO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtTQUNyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVJLDJDQUFtQixHQUExQixVQUEyQixLQUF3QjtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDO1lBQ1AsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QixRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sNkJBQUssR0FBWixVQUFhLEtBQXdCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF0RFksYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FNc0MseUJBQWdCO1lBQ3JDLFdBQUk7WUFDRSwwQkFBVztPQVB2QixhQUFhLENBNkV6QjtJQUFELG9CQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9kb21haW4vdHJhbnNhY3Rpb24nO1xuLy8gaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLy8gaW1wb3J0IHsgU2VuZFBhZ2UgfSBmcm9tICcuLi9zZW5kL3NlbmQnO1xuLy8gaW1wb3J0IHsgUmVjZWl2ZVBhZ2UgfSBmcm9tICcuLi9yZWNlaXZlL3JlY2VpdmUnO1xuLy8gaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3MnO1xuLy8gaW1wb3J0IHsgTmF0aXZlUGFnZVRyYW5zaXRpb25zLCBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXBhZ2UtdHJhbnNpdGlvbnMnO1xuLy8gaW1wb3J0IHsgVmlicmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWJyYXRpb24nO1xuLy8gaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBUcnRsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJ0bC90cnRsLnNlcnZpY2UnXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IFZpYnJhdGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdmlicmF0ZSc7XG4vLyBpbXBvcnQgeyBXYWxsZXRCYWNrZW5kLCBDb252ZW50aW9uYWxEYWVtb24sIEJsb2NrY2hhaW5DYWNoZUFwaSB9IGZyb20gJ3R1cnRsZWNvaW4td2FsbGV0LWJhY2tlbmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhSXRlbXMgPSBbXTtcbiAgdmlicmF0b3IgPSBuZXcgVmlicmF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgXG4gICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHRydGxTZXJ2aWNlOiBUcnRsU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucG9wdWxhdGVUZXN0RGF0YSgpO1xuICB9XG5cbiAgbmF2aWdhdGVUbyh1cmwpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3VybF0sIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICBjdXJ2ZTogJ0Vhc2UtaW4tb3V0J1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwb3B1bGF0ZVRlc3REYXRhKCkge1xuICAgIGxldCBkYXRhMSA9IHtcbiAgICAgIFwidHlwZVwiOiBcInNlbmRcIiwgXG4gICAgICBcImFtb3VudFwiOiA0NCwgXG4gICAgICBcInRvQWRkcmVzc1wiOiBcInRvQWRkcmVzczA5ODEzbGpmXCIsIFxuICAgICAgXCJmcm9tQWRkcmVzc1wiOiBcImZyb21BZGRyZXNzMHZtc2RqZmxcIixcbiAgICAgIFwidHJhbnNhY3Rpb25IYXNoXCI6IFwidHJhbnNhY3Rpb25IYXNoMjljdm54c2RrZlwiXG4gICAgfTtcbiAgICBsZXQgZGF0YTIgPSB7XG4gICAgICBcInR5cGVcIjogXCJtYWlsXCIsIFxuICAgICAgXCJhbW91bnRcIjogMjQ4NywgXG4gICAgICBcInRvQWRkcmVzc1wiOiBcInRvQWRkeTIwMzk4NGN2eFwiLCBcbiAgICAgIFwiZnJvbUFkZHJlc3NcIjogXCJmcm9tQWRkeTMyOTRjbnNcIixcbiAgICAgIFwidHJhbnNhY3Rpb25IYXNoXCI6IFwidEhhc2gzMjA5OGpjc2RmXCJcbiAgICB9O1xuICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2gobmV3IFRyYW5zYWN0aW9uKGRhdGExKSk7XG4gICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXcgVHJhbnNhY3Rpb24oZGF0YTIpKTtcbiAgfVxuXG5wdWJsaWMgcmVmcmVzaFRyYW5zYWN0aW9ucyhldmVudDogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hUcmFuc2FjdGlvbnNcIik7XG4gICAgdGhpcy52aWJyYXRvci52aWJyYXRlKDIwMDApO1xuICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgIH0sIDEwMDApO1xufVxuXG5wdWJsaWMgb25UYXAoZXZlbnQ6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gIGNvbnNvbGUubG9nKFwib25UYXAoKSBpbmRleDogXCIgKyBldmVudC5pbmRleCk7XG59XG5cbi8vIHB1YmxpYyB3YWxsZXRUZXN0KCkgeyBcbi8vICAgKGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCBkYWVtb246IEJsb2NrY2hhaW5DYWNoZUFwaSA9IG5ldyBCbG9ja2NoYWluQ2FjaGVBcGkoJ2Jsb2NrYXBpLnR1cnRsZXBheS5pbycsIHRydWUpO1xuICAgIFxuLy8gICAgIGNvbnN0IHdhbGxldDogV2FsbGV0QmFja2VuZCA9IFdhbGxldEJhY2tlbmQuY3JlYXRlV2FsbGV0KGRhZW1vbik7XG5cbi8vICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCB3YWxsZXQnKTtcblxuLy8gICAgIGF3YWl0IHdhbGxldC5zdGFydCgpO1xuXG4vLyAgICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgd2FsbGV0Jyk7XG5cbi8vICAgICB3YWxsZXQuc2F2ZVdhbGxldFRvRmlsZSgnbXl3YWxsZXQud2FsbGV0JywgJ2h1bnRlcjInKTtcblxuLy8gICAgIC8qIE1ha2Ugc3VyZSB0byBjYWxsIHN0b3AgdG8gbGV0IHRoZSBub2RlIHByb2Nlc3MgZXhpdCAqL1xuLy8gICAgIHdhbGxldC5zdG9wKCk7XG4vLyAgIH0pKCkuY2F0Y2goZXJyID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdDYXVnaHQgcHJvbWlzZSByZWplY3Rpb246ICcgKyBlcnIpO1xuLy8gICB9KTtcbi8vIH1cblxufVxuIl19