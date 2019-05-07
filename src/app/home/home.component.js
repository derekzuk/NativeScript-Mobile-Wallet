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
var turtlecoin_wallet_backend_1 = require("turtlecoin-wallet-backend");
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
    HomeComponent.prototype.walletTest = function () {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var daemon, wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        daemon = new turtlecoin_wallet_backend_1.ConventionalDaemon('127.0.0.1', 11898);
                        wallet = turtlecoin_wallet_backend_1.WalletBackend.createWallet(daemon);
                        console.log('Created wallet');
                        return [4 /*yield*/, wallet.start()];
                    case 1:
                        _a.sent();
                        console.log('Started wallet');
                        wallet.saveWalletToFile('mywallet.wallet', 'hunter2');
                        /* Make sure to call stop to let the node process exit */
                        wallet.stop();
                        return [2 /*return*/];
                }
            });
        }); })().catch(function (err) {
            console.log('Caught promise rejection: ' + err);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELHFEQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCx1REFBdUQ7QUFDdkQsMEdBQTBHO0FBQzFHLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsNkRBQTBEO0FBRzFELDZEQUErQztBQUMvQyx1RUFBa0c7QUFRbEc7SUFLRSx1QkFBb0IsZ0JBQWtDLEVBQzVDLEtBQVcsRUFDWCxXQUF3QjtRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGxDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7SUFJYSxDQUFDO0lBRXZDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxHQUFHO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLGFBQWE7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxhQUFhLEVBQUUscUJBQXFCO1lBQ3BDLGlCQUFpQixFQUFFLDJCQUEyQjtTQUMvQyxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixhQUFhLEVBQUUsaUJBQWlCO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtTQUNyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVJLDJDQUFtQixHQUExQixVQUEyQixLQUF3QjtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDO1lBQ1AsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QixRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sNkJBQUssR0FBWixVQUFhLEtBQXdCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUFBLGlCQXVCQztRQXRCQyxDQUFDOzs7Ozt3QkFDTyxNQUFNLEdBQXVCLElBQUksOENBQWtCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQU14RSxNQUFNLEdBQWtCLHlDQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRTlCLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQXBCLFNBQW9CLENBQUM7d0JBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFFOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUV0RCx5REFBeUQ7d0JBQ3pELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OzthQUNmLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQS9FWSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU1zQyx5QkFBZ0I7WUFDckMsV0FBSTtZQUNFLDBCQUFXO09BUHZCLGFBQWEsQ0FpRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL2RvbWFpbi90cmFuc2FjdGlvbic7XG4vLyBpbXBvcnQgeyBOYXZDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vLyBpbXBvcnQgeyBTZW5kUGFnZSB9IGZyb20gJy4uL3NlbmQvc2VuZCc7XG4vLyBpbXBvcnQgeyBSZWNlaXZlUGFnZSB9IGZyb20gJy4uL3JlY2VpdmUvcmVjZWl2ZSc7XG4vLyBpbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncyc7XG4vLyBpbXBvcnQgeyBOYXRpdmVQYWdlVHJhbnNpdGlvbnMsIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtcGFnZS10cmFuc2l0aW9ucyc7XG4vLyBpbXBvcnQgeyBWaWJyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ZpYnJhdGlvbic7XG4vLyBpbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFRydGxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS90cnRsL3RydGwuc2VydmljZSdcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWJyYXRlJztcbmltcG9ydCB7IFdhbGxldEJhY2tlbmQsIENvbnZlbnRpb25hbERhZW1vbiwgQmxvY2tjaGFpbkNhY2hlQXBpIH0gZnJvbSAndHVydGxlY29pbi13YWxsZXQtYmFja2VuZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGFJdGVtcyA9IFtdO1xuICB2aWJyYXRvciA9IG5ldyBWaWJyYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgdHJ0bFNlcnZpY2U6IFRydGxTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wb3B1bGF0ZVRlc3REYXRhKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvKHVybCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdXJsXSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICAgIGN1cnZlOiAnRWFzZS1pbi1vdXQnXG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvcHVsYXRlVGVzdERhdGEoKSB7XG4gICAgbGV0IGRhdGExID0ge1xuICAgICAgXCJ0eXBlXCI6IFwic2VuZFwiLCBcbiAgICAgIFwiYW1vdW50XCI6IDQ0LCBcbiAgICAgIFwidG9BZGRyZXNzXCI6IFwidG9BZGRyZXNzMDk4MTNsamZcIiwgXG4gICAgICBcImZyb21BZGRyZXNzXCI6IFwiZnJvbUFkZHJlc3Mwdm1zZGpmbFwiLFxuICAgICAgXCJ0cmFuc2FjdGlvbkhhc2hcIjogXCJ0cmFuc2FjdGlvbkhhc2gyOWN2bnhzZGtmXCJcbiAgICB9O1xuICAgIGxldCBkYXRhMiA9IHtcbiAgICAgIFwidHlwZVwiOiBcIm1haWxcIiwgXG4gICAgICBcImFtb3VudFwiOiAyNDg3LCBcbiAgICAgIFwidG9BZGRyZXNzXCI6IFwidG9BZGR5MjAzOTg0Y3Z4XCIsIFxuICAgICAgXCJmcm9tQWRkcmVzc1wiOiBcImZyb21BZGR5MzI5NGNuc1wiLFxuICAgICAgXCJ0cmFuc2FjdGlvbkhhc2hcIjogXCJ0SGFzaDMyMDk4amNzZGZcIlxuICAgIH07XG4gICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXcgVHJhbnNhY3Rpb24oZGF0YTEpKTtcbiAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKG5ldyBUcmFuc2FjdGlvbihkYXRhMikpO1xuICB9XG5cbnB1YmxpYyByZWZyZXNoVHJhbnNhY3Rpb25zKGV2ZW50OiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwicmVmcmVzaFRyYW5zYWN0aW9uc1wiKTtcbiAgICB0aGlzLnZpYnJhdG9yLnZpYnJhdGUoMjAwMCk7XG4gICAgY29uc3QgdGhhdCA9IG5ldyBXZWFrUmVmKHRoaXMpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBsaXN0VmlldyA9IGV2ZW50Lm9iamVjdDtcbiAgICAgICAgbGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgfSwgMTAwMCk7XG59XG5cbnB1YmxpYyBvblRhcChldmVudDogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgY29uc29sZS5sb2coXCJvblRhcCgpIGluZGV4OiBcIiArIGV2ZW50LmluZGV4KTtcbn1cblxucHVibGljIHdhbGxldFRlc3QoKSB7IFxuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhZW1vbjogQ29udmVudGlvbmFsRGFlbW9uID0gbmV3IENvbnZlbnRpb25hbERhZW1vbignMTI3LjAuMC4xJywgMTE4OTgpO1xuXG4gICAgLyogT1JcbiAgICBjb25zdCBkYWVtb246IEJsb2NrY2hhaW5DYWNoZUFwaSA9IG5ldyBCbG9ja2NoYWluQ2FjaGVBcGkoJ2Jsb2NrYXBpLnR1cnRsZXBheS5pbycsIHRydWUpO1xuICAgICovXG4gICAgXG4gICAgY29uc3Qgd2FsbGV0OiBXYWxsZXRCYWNrZW5kID0gV2FsbGV0QmFja2VuZC5jcmVhdGVXYWxsZXQoZGFlbW9uKTtcblxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHdhbGxldCcpO1xuXG4gICAgYXdhaXQgd2FsbGV0LnN0YXJ0KCk7XG5cbiAgICBjb25zb2xlLmxvZygnU3RhcnRlZCB3YWxsZXQnKTtcblxuICAgIHdhbGxldC5zYXZlV2FsbGV0VG9GaWxlKCdteXdhbGxldC53YWxsZXQnLCAnaHVudGVyMicpO1xuXG4gICAgLyogTWFrZSBzdXJlIHRvIGNhbGwgc3RvcCB0byBsZXQgdGhlIG5vZGUgcHJvY2VzcyBleGl0ICovXG4gICAgd2FsbGV0LnN0b3AoKTtcbiAgfSkoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0NhdWdodCBwcm9taXNlIHJlamVjdGlvbjogJyArIGVycik7XG4gIH0pO1xufVxuXG59XG4iXX0=