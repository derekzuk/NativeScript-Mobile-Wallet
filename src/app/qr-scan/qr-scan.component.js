"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("BarcodeScanner", function () { return require("nativescript-barcodescanner").BarcodeScannerView; });
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
// https://github.com/EddyVerbruggen/nativescript-barcodescanner
var QrScanComponent = /** @class */ (function () {
    function QrScanComponent() {
        this.barcodeScanner = new nativescript_barcodescanner_1.BarcodeScanner();
    }
    QrScanComponent.prototype.scanBarcode = function () {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!",
            cancelLabelBackgroundColor: "#333333",
            message: "Use the volume buttons for extra light",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            closeCallback: function () { console.log("Scanner closed"); },
            resultDisplayDuration: 500,
            orientation: "portrait",
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then(function (result) {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        }, function (errorMessage) {
            console.log("No scan. " + errorMessage);
        });
    };
    QrScanComponent = __decorate([
        core_1.Component({
            selector: "qr-scan",
            templateUrl: "qr-scan.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], QrScanComponent);
    return QrScanComponent;
}());
exports.QrScanComponent = QrScanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXItc2Nhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxci1zY2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUMsa0JBQWtCLEVBQXpELENBQXlELENBQUMsQ0FBQztBQUNuRywyRUFBNkQ7QUFFN0QsZ0VBQWdFO0FBS2hFO0lBR0k7UUFGQSxtQkFBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDO0lBSXRDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDekIsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELDBCQUEwQixFQUFFLFNBQVM7WUFDckMsT0FBTyxFQUFFLHdDQUF3QztZQUNqRCxvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxhQUFhLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDO1lBQ3JELHFCQUFxQixFQUFFLEdBQUc7WUFDMUIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLG1GQUFtRjtTQUNwSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLCtGQUErRjtZQUMvRixLQUFLLENBQUM7Z0JBQ04sS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUk7Z0JBQ2hFLFlBQVksRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxVQUFDLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0EsQ0FBQztJQUNOLENBQUM7SUFqQ1EsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGVBQWUsQ0FtQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xucmVnaXN0ZXJFbGVtZW50KFwiQmFyY29kZVNjYW5uZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiKS5CYXJjb2RlU2Nhbm5lclZpZXcpO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9uYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInFyLXNjYW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCJxci1zY2FuLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFFyU2NhbkNvbXBvbmVudCB7XG4gICAgYmFyY29kZVNjYW5uZXIgPSBuZXcgQmFyY29kZVNjYW5uZXIoKTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgc2NhbkJhcmNvZGUoKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgIGZvcm1hdHM6IFwiUVJfQ09ERSwgRUFOXzEzXCIsXG4gICAgICAgIGNhbmNlbExhYmVsOiBcIkVYSVQuIEFsc28sIHRyeSB0aGUgdm9sdW1lIGJ1dHRvbnMhXCIsIC8vIGlPUyBvbmx5LCBkZWZhdWx0ICdDbG9zZSdcbiAgICAgICAgY2FuY2VsTGFiZWxCYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCAvLyBpT1Mgb25seSwgZGVmYXVsdCAnIzAwMDAwMCcgKGJsYWNrKVxuICAgICAgICBtZXNzYWdlOiBcIlVzZSB0aGUgdm9sdW1lIGJ1dHRvbnMgZm9yIGV4dHJhIGxpZ2h0XCIsIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCBpcyAnUGxhY2UgYSBiYXJjb2RlIGluc2lkZSB0aGUgdmlld2ZpbmRlciByZWN0YW5nbGUgdG8gc2NhbiBpdC4nXG4gICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiB0cnVlLCAgIC8vIGRlZmF1bHQgZmFsc2VcbiAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlLCAgICAgLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsICAgICAgICAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICAgIGJlZXBPblNjYW46IHRydWUsICAgICAgICAgICAgIC8vIFBsYXkgb3IgU3VwcHJlc3MgYmVlcCBvbiBzY2FuIChkZWZhdWx0IHRydWUpXG4gICAgICAgIHRvcmNoT246IGZhbHNlLCAgICAgICAgICAgICAgIC8vIGxhdW5jaCB3aXRoIHRoZSBmbGFzaGxpZ2h0IG9uIChkZWZhdWx0IGZhbHNlKVxuICAgICAgICBjbG9zZUNhbGxiYWNrOiAoKSA9PiB7IGNvbnNvbGUubG9nKFwiU2Nhbm5lciBjbG9zZWRcIil9LCAvLyBpbnZva2VkIHdoZW4gdGhlIHNjYW5uZXIgd2FzIGNsb3NlZCAoc3VjY2VzcyBvciBhYm9ydClcbiAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDAsICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IDE1MDAgKG1zKSwgc2V0IHRvIDAgdG8gZGlzYWJsZSBlY2hvaW5nIHRoZSBzY2FubmVkIHRleHRcbiAgICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIiwgICAgIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCB1bmRlZmluZWQgKHNlbnNvci1kcml2ZW4gb3JpZW50YXRpb24pLCBvdGhlciBvcHRpb25zOiBwb3J0cmFpdHxsYW5kc2NhcGVcbiAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZSAvLyBPbiBpT1MgeW91IGNhbiBzZW5kIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBhcHAgaWYgYWNjZXNzIHdhcyBwcmV2aW91c2x5IGRlbmllZFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIFByb21pc2UgaXMgbmV2ZXIgaW52b2tlZCB3aGVuIGEgJ2NvbnRpbnVvdXNTY2FuQ2FsbGJhY2snIGZ1bmN0aW9uIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJTY2FuIHJlc3VsdFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufSJdfQ==