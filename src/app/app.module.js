"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var qr_page_component_1 = require("./qr-page/qr-page.component");
var input_field_component_1 = require("./input-field/input-field.component");
var qr_scan_component_1 = require("./qr-scan/qr-scan.component");
var common_1 = require("@angular/common");
var angular_1 = require("nativescript-ui-listview/angular");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var home_component_1 = require("./home/home.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                common_1.CommonModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                app_component_1.AppComponent,
                qr_page_component_1.QrPageComponent,
                input_field_component_1.InputFieldComponent,
                home_component_1.HomeComponent,
                qr_scan_component_1.QrScanComponent
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsaUVBQThEO0FBQzlELDZFQUEwRTtBQUMxRSxpRUFBOEQ7QUFDOUQsMENBQStDO0FBQy9DLDREQUFnRjtBQUNoRiwyRUFBNkQ7QUFFN0QsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLHdEQUFzRDtBQTZCdEQ7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDUCxTQUFTLEVBQUU7Z0JBQ1IsNEJBQVk7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTix3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIscUJBQVk7Z0JBQ1osc0NBQTRCO2FBQzlCO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLDRCQUFZO2dCQUNaLG1DQUFlO2dCQUNmLDJDQUFtQjtnQkFDbkIsOEJBQWE7Z0JBQ2IsbUNBQWU7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1IsNENBQWM7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ04sdUJBQWdCO2FBQ2xCO1NBQ0gsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXJQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vcXItcGFnZS9xci1wYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gXCIuL2lucHV0LWZpZWxkL2lucHV0LWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXJTY2FuQ29tcG9uZW50IH0gZnJvbSBcIi4vcXItc2Nhbi9xci1zY2FuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgXSxcbiAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgUXJQYWdlQ29tcG9uZW50LFxuICAgICAgSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBRclNjYW5Db21wb25lbnRcbiAgIF0sXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIEJhcmNvZGVTY2FubmVyXG4gICBdLFxuICAgc2NoZW1hczogW1xuICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==