import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  dataItems = ["a", "b", "c"];

  constructor(private routerExtensions: RouterExtensions, private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  navigateTo(url) {
    this.routerExtensions.navigate([url], {
        transition: {
        name: 'fade',
        curve: 'linear'
        }
    });
}
}
