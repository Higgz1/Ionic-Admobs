import { Component, OnInit } from '@angular/core';
import {
  AdLoadInfo,
  AdMob,
  AdOptions,
  InterstitialAdPluginEvents,
} from '@capacitor-community/admob';
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

    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared interstitial
    });

    const options: AdOptions = {
      adId: 'YOUR ADID',
      // isTesting: true
      // npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }
}
