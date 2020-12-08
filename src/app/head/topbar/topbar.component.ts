import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faPinterestSquare,
  faGooglePlusG,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface Currency {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedValue: string;
  selectedCar: string;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPinterestSquare = faPinterestSquare;
  faGooglePlusG = faGooglePlusG;
  faInstagram = faInstagram;
  currency: Currency[] = [
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
    { value: 'gbp', viewValue: 'GBP' },
    { value: 'pkr', viewValue: 'PKR' },
    { value: 'cad', viewValue: 'CAD' },
    { value: 'jpy', viewValue: 'JPY' },
  ];
  selectedFood = this.currency[0].value;
}
