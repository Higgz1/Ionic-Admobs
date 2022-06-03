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
    //get ids for banner and others from created admob adunit.
    // note ids are production only ,so only use them in prod
    // if testing or dev use blank or dummy string as below for ids
    const adId = isPlatform('ios') ? 'ios-ad-id' : 'android-ad-id';

    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared interstitial
    });

    const options: AdOptions = {
      adId,
      // isTesting: true
      // npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }
}
