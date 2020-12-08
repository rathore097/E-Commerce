import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
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
          '<h4 style="font-weight: 500; color: #333333">Black Friday Guide: Best Sales & Discount Codes</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>',
      },
      {
        rows: 2.2,
        cols: 1,
        data: 2,
        html:
          '<h4 style="font-weight: 500; color: #333333">The White Sneakers Nearly Every Fashion Girls Own</h4><p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>',
      },
      {
        rows: 2.2,
        cols: 1,
        data: 3,
        html:
          '<h4 style="font-weight: 500; color: #333333">New York SS 2018 Street Style: By Annina Mislin</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>',
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
