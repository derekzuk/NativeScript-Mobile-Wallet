"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var qr_page_component_1 = require("./qr-page/qr-page.component");
var input_field_component_1 = require("./input-field/input-field.component");
var qr_scan_component_1 = require("./qr-scan/qr-scan.component");
var settings_component_1 = require("./settings/settings.component");
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
                qr_scan_component_1.QrScanComponent,
                settings_component_1.SettingsComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsaUVBQThEO0FBQzlELDZFQUEwRTtBQUMxRSxpRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLDBDQUErQztBQUMvQyw0REFBZ0Y7QUFDaEYsMkVBQTZEO0FBRTdELDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQUNuRix3REFBc0Q7QUE4QnREO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTVCckIsZUFBUSxDQUFDO1lBQ1AsU0FBUyxFQUFFO2dCQUNSLDRCQUFZO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ04sd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHFCQUFZO2dCQUNaLHNDQUE0QjthQUM5QjtZQUNELFlBQVksRUFBRTtnQkFDWCw0QkFBWTtnQkFDWixtQ0FBZTtnQkFDZiwyQ0FBbUI7Z0JBQ25CLDhCQUFhO2dCQUNiLG1DQUFlO2dCQUNmLHNDQUFpQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUiw0Q0FBYzthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTix1QkFBZ0I7YUFDbEI7U0FDSCxDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRclBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9xci1wYWdlL3FyLXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRclNjYW5Db21wb25lbnQgfSBmcm9tIFwiLi9xci1zY2FuL3FyLXNjYW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgXSxcbiAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgUXJQYWdlQ29tcG9uZW50LFxuICAgICAgSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBRclNjYW5Db21wb25lbnQsXG4gICAgICBTZXR0aW5nc0NvbXBvbmVudFxuICAgXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgQmFyY29kZVNjYW5uZXJcbiAgIF0sXG4gICBzY2hlbWFzOiBbXG4gICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19