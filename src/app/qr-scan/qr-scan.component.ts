import { Component } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);
import { BarcodeScanner } from "nativescript-barcodescanner";

// https://github.com/EddyVerbruggen/nativescript-barcodescanner
@Component({
    selector: "qr-scan",
    templateUrl: "qr-scan.component.html",
})
export class QrScanComponent {
    barcodeScanner = new BarcodeScanner();

    constructor(){

    }

    scanBarcode() {
        this.barcodeScanner.scan({
        formats: "QR_CODE, EAN_13",
        cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
        cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
        message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        showFlipCameraButton: true,   // default false
        preferFrontCamera: false,     // default false
        showTorchButton: true,        // default false
        beepOnScan: true,             // Play or Suppress beep on scan (default true)
        torchOn: false,               // launch with the flashlight on (default false)
        closeCallback: () => { console.log("Scanner closed")}, // invoked when the scanner was closed (success or abort)
        resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
        orientation: "portrait",     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
        openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
            console.log("in scanBarcode() result")
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            alert({
            title: "Scan result",
            message: "Format: " + result.format + ",\nValue: " + result.text,
            okButtonText: "OK"
            });
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        }
        );
    }

}