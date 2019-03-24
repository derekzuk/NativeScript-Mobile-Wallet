import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { QrPageComponent } from "./qr-page/qr-page.component";
import { InputFieldComponent } from "./input-field/input-field.component";
import { CommonModule } from "@angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HomeComponent } from './home/home.component';

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      CommonModule,
      NativeScriptUIListViewModule
   ],
   declarations: [
      AppComponent,
      QrPageComponent,
      InputFieldComponent,
      HomeComponent,
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
