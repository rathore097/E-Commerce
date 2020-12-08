import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}
  public list = [];
  breakpoint: number;
  ngOnInit(): void {
    this.list = [
      { rows: 2.2, cols: 1, data: 1 },
      { rows: 2.2, cols: 1, data: 2 },
      { rows: 2.2, cols: 1, data: 3 },
      { rows: 1.2, cols: 1, data: 4 },
      { rows: 1.2, cols: 1, data: 5 },
      { rows: 1.2, cols: 1, data: 6 },
    ];
    if (window.innerWidth <= 500) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 800) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }
  onResize(event) {
    if (event.target.innerWidth <= 500) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 800) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }
  images = [
    { img: '../../../assets/master-slide/master-slide-04.jpg' },
    { img: '../../../assets/master-slide/master-slide-02.jpg' },
    { img: '../../../assets/master-slide/master-slide-01.jpg' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    animationSpeed: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
}
