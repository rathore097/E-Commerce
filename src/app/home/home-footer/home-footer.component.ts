import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
  constructor() {}
  public list = [];
  breakpoint: number;
  ngOnInit(): void {
    this.list = [
      {
        rows: 2.2,
        cols: 1,
        data: 1,
        html:
          '<h4>Free Delivery Worldwide</h4><p>Mirum est notare quam littera gothica</p>',
      },
      {
        rows: 2.2,
        cols: 1,
        data: 2,
        html:
          '<h4>30 Days Return</h4><p>Simply return it within 30 days for an exchange.</p>',
        class: 'box2',
      },
      {
        rows: 2.2,
        cols: 1,
        data: 3,
        html:
          '<h4>Free Delivery Worldwide</h4><p>Shop open from Monday to Sunday</p>',
      },
    ];
    if (window.innerWidth <= 768) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 3;
    }
  }
  onResize(event) {
    if (event.target.innerWidth <= 768) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 3;
    }
  }
}
