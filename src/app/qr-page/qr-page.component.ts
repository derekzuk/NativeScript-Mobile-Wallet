import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.css'],
  moduleId: module.id
})
export class QrPageComponent implements OnInit {

  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  back() {
    this.routerExtensions.back();
  }

}
