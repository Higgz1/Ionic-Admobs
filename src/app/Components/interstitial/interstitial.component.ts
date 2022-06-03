import { Component, OnInit } from '@angular/core';
import { isPlatform, Platform } from '@ionic/angular';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss'],
})
export class InterstitialComponent implements OnInit {
  constructor(public platform: Platform) {}

  ngOnInit() {}

  async showInterstitial() {
    const adId = isPlatform('ios') ? 'ios-ad-id' : 'android-ad-id';
  }
}
