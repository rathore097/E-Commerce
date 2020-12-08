import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faPinterestSquare,
  faGooglePlusG,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faPinterestSquare = faPinterestSquare;
  faGooglePlusG = faGooglePlusG;
  faInstagram = faInstagram;
  faCcVisa = faCcVisa;
  faCcMastercard = faCcMastercard;
  faCcAmex = faCcAmex;
  faCcPaypal = faCcPaypal;

  myplaceHolder: string = 'Email Address';

  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = null;
      return;
    } else {
      this.myplaceHolder = 'Email Address';
      return;
    }
  }
}
