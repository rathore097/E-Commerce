import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    { img: '../../../assets/item/item-03.jpg' },
    { img: '../../../assets/item/item-04.jpg' },
    { img: '../../../assets/item/item-10.jpg' },
    { img: '../../../assets/item/item-11.jpg' },
    { img: '../../../assets/item/item-12.jpg' },
    { img: '../../../assets/item/item-13.jpg' },
    { img: '../../../assets/item/item-15.jpg' },
    { img: '../../../assets/item/item-16.jpg' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    animationSpeed: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
}
