"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var InputFieldComponent = /** @class */ (function () {
    function InputFieldComponent(_page, routerExtensions) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
        this.items = [
            { number: '1' },
            { number: '2' },
            { number: '3' },
            { number: '4' },
            { number: '5' },
            { number: '6' },
            { number: '7' },
            { number: '8' },
            { number: '9' },
            { number: 'DELETE' },
            { number: '0' },
            { number: '.' }
        ];
    }
    InputFieldComponent.prototype.ngOnInit = function () {
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.digits = deviceWidth * 0.08;
        this._page.actionBarHidden = true;
        // if(!platformModule.isIOS) {
        this.itemWidth = deviceWidth * 0.215;
        // } else {
        // this.itemHeight = deviceHeight * 0.1;
        // this.itemWidth = deviceWidth * 0.26;
        // }
    };
    InputFieldComponent.prototype.setClass = function (item) {
        if (item.number == 'DELETE' || item.number == '.') {
            return false;
        }
        else {
            return true;
        }
    };
    InputFieldComponent.prototype.numberTap = function (i) {
        this.activeIndex = i;
    };
    Object.defineProperty(InputFieldComponent.prototype, "activeIndexNumber", {
        get: function () {
            if (this.activeIndex == 9 || this.activeIndex == 11) {
                console.log("working");
                return null;
            }
            else {
                return this.activeIndex;
            }
        },
        enumerable: true,
        configurable: true
    });
    InputFieldComponent.prototype.back = function () {
        this.routerExtensions.back();
    };
    InputFieldComponent = __decorate([
        core_1.Component({
            selector: 'ns-input-field',
            templateUrl: './input-field.component.html',
            styleUrls: ['./input-field.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], InputFieldComponent);
    return InputFieldComponent;
}());
exports.InputFieldComponent = InputFieldComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBEQUE0RDtBQUM1RCxzREFBcUQ7QUFDckQsc0RBQStEO0FBUS9EO0lBRUUsNkJBQW9CLEtBQVcsRUFBVSxnQkFBa0M7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFzQjNFLFVBQUssR0FBRztZQUNOLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtZQUNwQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDZixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7U0FDaEIsQ0FBQTtJQW5DOEUsQ0FBQztJQU9oRixzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksV0FBVyxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWxDLDhCQUE4QjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdkMsV0FBVztRQUNULHdDQUF3QztRQUN4Qyx1Q0FBdUM7UUFDekMsSUFBSTtJQUNOLENBQUM7SUFpQkQsc0NBQVEsR0FBUixVQUFTLElBQUk7UUFDWCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQUksa0RBQWlCO2FBQXJCO1lBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsRUFBRTtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELGtDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQS9EVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHMkIsV0FBSSxFQUE0Qix5QkFBZ0I7T0FGaEUsbUJBQW1CLENBZ0UvQjtJQUFELDBCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1pbnB1dC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWZpZWxkLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIGFjdGl2ZUluZGV4O1xuICBpdGVtSGVpZ2h0O1xuICBpdGVtV2lkdGg7XG4gIGRpZ2l0cztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZGV2aWNlSGVpZ2h0OiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuICAgIGxldCBkZXZpY2VXaWR0aDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuZGlnaXRzID0gZGV2aWNlV2lkdGggKiAwLjA4O1xuXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIFxuICAgIC8vIGlmKCFwbGF0Zm9ybU1vZHVsZS5pc0lPUykge1xuICAgICAgdGhpcy5pdGVtV2lkdGggPSBkZXZpY2VXaWR0aCAqIDAuMjE1O1xuICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLml0ZW1IZWlnaHQgPSBkZXZpY2VIZWlnaHQgKiAwLjE7XG4gICAgICAvLyB0aGlzLml0ZW1XaWR0aCA9IGRldmljZVdpZHRoICogMC4yNjtcbiAgICAvLyB9XG4gIH1cblxuICBpdGVtcyA9IFtcbiAgICB7IG51bWJlcjogJzEnIH0sXG4gICAgeyBudW1iZXI6ICcyJyB9LFxuICAgIHsgbnVtYmVyOiAnMycgfSxcbiAgICB7IG51bWJlcjogJzQnIH0sXG4gICAgeyBudW1iZXI6ICc1JyB9LFxuICAgIHsgbnVtYmVyOiAnNicgfSxcbiAgICB7IG51bWJlcjogJzcnIH0sXG4gICAgeyBudW1iZXI6ICc4JyB9LFxuICAgIHsgbnVtYmVyOiAnOScgfSxcbiAgICB7IG51bWJlcjogJ0RFTEVURScgfSxcbiAgICB7IG51bWJlcjogJzAnIH0sXG4gICAgeyBudW1iZXI6ICcuJyB9XG4gIF1cbiAgXG4gIHNldENsYXNzKGl0ZW0pIHtcbiAgICBpZihpdGVtLm51bWJlciA9PSAnREVMRVRFJyB8fCBpdGVtLm51bWJlciA9PSAnLicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbnVtYmVyVGFwKGkpIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaTtcbiAgfVxuICBcbiAgZ2V0IGFjdGl2ZUluZGV4TnVtYmVyKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09IDkgfHwgdGhpcy5hY3RpdmVJbmRleCA9PSAxMSkge1xuICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xuICAgICAgXG4gICAgICByZXR1cm4gbnVsbDsgIFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleDtcbiAgICB9XG4gIH0gXG5cbiAgYmFjaygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG59Il19