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
    InputFieldComponent.prototype.navigateTo = function (url) {
        this.routerExtensions.navigate([url], {
            transition: {
                name: 'slideRight',
                curve: 'Ease-in-out'
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBEQUE0RDtBQUM1RCxzREFBcUQ7QUFDckQsc0RBQStEO0FBUS9EO0lBRUUsNkJBQW9CLEtBQVcsRUFBVSxnQkFBa0M7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFzQjNFLFVBQUssR0FBRztZQUNOLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUNsQixDQUFBO0lBbkM4RSxDQUFDO0lBT2hGLHNDQUFRLEdBQVI7UUFDRSxJQUFJLFlBQVksR0FBVyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsOEJBQThCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN2QyxXQUFXO1FBQ1Qsd0NBQXdDO1FBQ3hDLHVDQUF1QztRQUN6QyxJQUFJO0lBQ04sQ0FBQztJQWlCRCxzQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDN0MsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxrREFBaUI7YUFBckI7WUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV2QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBO0lBRUQsa0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEdBQUc7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsVUFBVSxFQUFFO2dCQUNaLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsYUFBYTthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4RVUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDMUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBRzJCLFdBQUksRUFBNEIseUJBQWdCO09BRmhFLG1CQUFtQixDQXlFL0I7SUFBRCwwQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaW5wdXQtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1maWVsZC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBhY3RpdmVJbmRleDtcbiAgaXRlbUhlaWdodDtcbiAgaXRlbVdpZHRoO1xuICBkaWdpdHM7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICBsZXQgZGV2aWNlV2lkdGg6IG51bWJlciA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLmRpZ2l0cyA9IGRldmljZVdpZHRoICogMC4wODtcblxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBpZighcGxhdGZvcm1Nb2R1bGUuaXNJT1MpIHtcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gZGV2aWNlV2lkdGggKiAwLjIxNTtcbiAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5pdGVtSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4xO1xuICAgICAgLy8gdGhpcy5pdGVtV2lkdGggPSBkZXZpY2VXaWR0aCAqIDAuMjY7XG4gICAgLy8gfVxuICB9XG5cbiAgaXRlbXMgPSBbXG4gICAgeyBudW1iZXI6ICcxJyB9LFxuICAgIHsgbnVtYmVyOiAnMicgfSxcbiAgICB7IG51bWJlcjogJzMnIH0sXG4gICAgeyBudW1iZXI6ICc0JyB9LFxuICAgIHsgbnVtYmVyOiAnNScgfSxcbiAgICB7IG51bWJlcjogJzYnIH0sXG4gICAgeyBudW1iZXI6ICc3JyB9LFxuICAgIHsgbnVtYmVyOiAnOCcgfSxcbiAgICB7IG51bWJlcjogJzknIH0sXG4gICAgeyBudW1iZXI6ICcuJyB9LFxuICAgIHsgbnVtYmVyOiAnMCcgfSxcbiAgICB7IG51bWJlcjogJ2RlbCcgfVxuICBdXG4gIFxuICBzZXRDbGFzcyhpdGVtKSB7XG4gICAgaWYoaXRlbS5udW1iZXIgPT0gJ2RlbCcgfHwgaXRlbS5udW1iZXIgPT0gJy4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG51bWJlclRhcChpKSB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGk7XG4gIH1cbiAgXG4gIGdldCBhY3RpdmVJbmRleE51bWJlcigpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PSA5IHx8IHRoaXMuYWN0aXZlSW5kZXggPT0gMTEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIG51bGw7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9IFxuXG4gIGJhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG8odXJsKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt1cmxdLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogJ3NsaWRlUmlnaHQnLFxuICAgICAgICBjdXJ2ZTogJ0Vhc2UtaW4tb3V0J1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=