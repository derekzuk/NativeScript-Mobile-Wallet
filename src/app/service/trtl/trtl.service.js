"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/* REEEEE ADD TYPES */
// const TurtleCoind = require('turtlecoin-rpc').TurtleCoind;
var TrtlService = /** @class */ (function () {
    function TrtlService() {
        this.trtlWalletTotal = "448207.348";
        console.log('Hello TrtlProvider Provider');
        // this.testTurtleCoind();
    }
    // testTurtleCoind() {
    //   const daemon = new TurtleCoind({
    //     host: 'daemon.turtle.link', // ip address or hostname of the TurtleCoind host
    //     port: 11898, // what port is the RPC server running on
    //     timeout: 2000, // request timeout
    //     ssl: false // whether we need to connect using SSL/TLS
    //   });
    //   daemon.getBlocks({
    //     height: 500000
    //   }).then((blocks) => {
    //     console.log(blocks);
    //   })
    // }
    TrtlService.prototype.getTrtlWalletTotal = function () {
        return this.trtlWalletTotal;
    };
    TrtlService.prototype.setQrScanResult = function (qrCode) {
        this.sendToAddress = qrCode;
    };
    TrtlService.prototype.getSendToAddress = function () {
        console.log("sendToAddress from Provider: " + this.sendToAddress);
        return this.sendToAddress;
    };
    TrtlService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TrtlService);
    return TrtlService;
}());
exports.TrtlService = TrtlService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ0bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJ0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNCQUFzQjtBQUN0Qiw2REFBNkQ7QUFLN0Q7SUFJRTtRQUhBLG9CQUFlLEdBQVcsWUFBWSxDQUFDO1FBSXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQywwQkFBMEI7SUFDNUIsQ0FBQztJQUVELHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsb0ZBQW9GO0lBQ3BGLDZEQUE2RDtJQUM3RCx3Q0FBd0M7SUFDeEMsNkRBQTZEO0lBQzdELFFBQVE7SUFFUix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLElBQUk7SUFFSix3Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFuQ1UsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxXQUFXLENBcUN2QjtJQUFELGtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qIFJFRUVFRSBBREQgVFlQRVMgKi9cbi8vIGNvbnN0IFR1cnRsZUNvaW5kID0gcmVxdWlyZSgndHVydGxlY29pbi1ycGMnKS5UdXJ0bGVDb2luZDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJ0bFNlcnZpY2Uge1xuICB0cnRsV2FsbGV0VG90YWw6IHN0cmluZyA9IFwiNDQ4MjA3LjM0OFwiO1xuICBzZW5kVG9BZGRyZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIFRydGxQcm92aWRlciBQcm92aWRlcicpO1xuICAgIC8vIHRoaXMudGVzdFR1cnRsZUNvaW5kKCk7XG4gIH1cblxuICAvLyB0ZXN0VHVydGxlQ29pbmQoKSB7XG4gIC8vICAgY29uc3QgZGFlbW9uID0gbmV3IFR1cnRsZUNvaW5kKHtcbiAgLy8gICAgIGhvc3Q6ICdkYWVtb24udHVydGxlLmxpbmsnLCAvLyBpcCBhZGRyZXNzIG9yIGhvc3RuYW1lIG9mIHRoZSBUdXJ0bGVDb2luZCBob3N0XG4gIC8vICAgICBwb3J0OiAxMTg5OCwgLy8gd2hhdCBwb3J0IGlzIHRoZSBSUEMgc2VydmVyIHJ1bm5pbmcgb25cbiAgLy8gICAgIHRpbWVvdXQ6IDIwMDAsIC8vIHJlcXVlc3QgdGltZW91dFxuICAvLyAgICAgc3NsOiBmYWxzZSAvLyB3aGV0aGVyIHdlIG5lZWQgdG8gY29ubmVjdCB1c2luZyBTU0wvVExTXG4gIC8vICAgfSk7XG5cbiAgLy8gICBkYWVtb24uZ2V0QmxvY2tzKHtcbiAgLy8gICAgIGhlaWdodDogNTAwMDAwXG4gIC8vICAgfSkudGhlbigoYmxvY2tzKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhibG9ja3MpO1xuICAvLyAgIH0pXG4gIC8vIH1cblxuICBnZXRUcnRsV2FsbGV0VG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJ0bFdhbGxldFRvdGFsO1xuICB9XG5cbiAgc2V0UXJTY2FuUmVzdWx0KHFyQ29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZW5kVG9BZGRyZXNzID0gcXJDb2RlO1xuICB9XG5cbiAgZ2V0U2VuZFRvQWRkcmVzcygpIHtcbiAgICBjb25zb2xlLmxvZyhcInNlbmRUb0FkZHJlc3MgZnJvbSBQcm92aWRlcjogXCIgKyB0aGlzLnNlbmRUb0FkZHJlc3MpO1xuICAgIHJldHVybiB0aGlzLnNlbmRUb0FkZHJlc3M7XG4gIH1cblxufSJdfQ==