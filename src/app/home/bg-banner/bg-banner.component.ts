import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-banner',
  templateUrl: './bg-banner.component.html',
  styleUrls: ['./bg-banner.component.scss'],
})
export class BgBannerComponent implements OnInit {
  constructor() {}
  public list = [];
  breakpoint: number;
  ngOnInit(): void {
    this.list = [
      { rows: 2.2, cols: 1, data: 1 },
      { rows: 2.2, cols: 1, data: 2 },
    ];
    if (window.innerWidth <= 992) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }
  onResize(event) {
    if (event.target.innerWidth <= 992) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }
}
