import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { QrPageComponent } from "./qr-page/qr-page.component";
import { InputFieldComponent } from "./input-field/input-field.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "send", component:  QrPageComponent },
    { path: "receive", component:  InputFieldComponent },
    { path: "home", component:  HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }