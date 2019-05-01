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
            { number: '.' },
            { number: '0' },
            { number: 'del' }
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
        if (item.number == 'del' || item.number == '.') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBEQUE0RDtBQUM1RCxzREFBcUQ7QUFDckQsc0RBQStEO0FBUS9EO0lBRUUsNkJBQW9CLEtBQVcsRUFBVSxnQkFBa0M7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFzQjNFLFVBQUssR0FBRztZQUNOLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUNsQixDQUFBO0lBbkM4RSxDQUFDO0lBT2hGLHNDQUFRLEdBQVI7UUFDRSxJQUFJLFlBQVksR0FBVyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsOEJBQThCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN2QyxXQUFXO1FBQ1Qsd0NBQXdDO1FBQ3hDLHVDQUF1QztRQUN6QyxJQUFJO0lBQ04sQ0FBQztJQWlCRCxzQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDN0MsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxrREFBaUI7YUFBckI7WUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV2QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBO0lBRUQsa0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBL0RVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUcyQixXQUFJLEVBQTRCLHlCQUFnQjtPQUZoRSxtQkFBbUIsQ0FnRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWlucHV0LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZmllbGQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgYWN0aXZlSW5kZXg7XG4gIGl0ZW1IZWlnaHQ7XG4gIGl0ZW1XaWR0aDtcbiAgZGlnaXRzO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBkZXZpY2VIZWlnaHQ6IG51bWJlciA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XG4gICAgbGV0IGRldmljZVdpZHRoOiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgdGhpcy5kaWdpdHMgPSBkZXZpY2VXaWR0aCAqIDAuMDg7XG5cbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgXG4gICAgLy8gaWYoIXBsYXRmb3JtTW9kdWxlLmlzSU9TKSB7XG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IGRldmljZVdpZHRoICogMC4yMTU7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuaXRlbUhlaWdodCA9IGRldmljZUhlaWdodCAqIDAuMTtcbiAgICAgIC8vIHRoaXMuaXRlbVdpZHRoID0gZGV2aWNlV2lkdGggKiAwLjI2O1xuICAgIC8vIH1cbiAgfVxuXG4gIGl0ZW1zID0gW1xuICAgIHsgbnVtYmVyOiAnMScgfSxcbiAgICB7IG51bWJlcjogJzInIH0sXG4gICAgeyBudW1iZXI6ICczJyB9LFxuICAgIHsgbnVtYmVyOiAnNCcgfSxcbiAgICB7IG51bWJlcjogJzUnIH0sXG4gICAgeyBudW1iZXI6ICc2JyB9LFxuICAgIHsgbnVtYmVyOiAnNycgfSxcbiAgICB7IG51bWJlcjogJzgnIH0sXG4gICAgeyBudW1iZXI6ICc5JyB9LFxuICAgIHsgbnVtYmVyOiAnLicgfSxcbiAgICB7IG51bWJlcjogJzAnIH0sXG4gICAgeyBudW1iZXI6ICdkZWwnIH1cbiAgXVxuICBcbiAgc2V0Q2xhc3MoaXRlbSkge1xuICAgIGlmKGl0ZW0ubnVtYmVyID09ICdkZWwnIHx8IGl0ZW0ubnVtYmVyID09ICcuJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBudW1iZXJUYXAoaSkge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpO1xuICB9XG4gIFxuICBnZXQgYWN0aXZlSW5kZXhOdW1iZXIoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT0gOSB8fCB0aGlzLmFjdGl2ZUluZGV4ID09IDExKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XG4gICAgICBcbiAgICAgIHJldHVybiBudWxsOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4O1xuICAgIH1cbiAgfSBcblxuICBiYWNrKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn0iXX0=