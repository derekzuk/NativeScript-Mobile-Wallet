import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id
})
export class SettingsComponent implements OnInit {

  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  back() {
    this.routerExtensions.back();
  }

}
