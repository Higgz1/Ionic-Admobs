import { Component, OnInit } from '@angular/core';
import {
  AdLoadInfo,
  AdMob,
  AdMobRewardItem,
  RewardAdOptions,
  RewardAdPluginEvents,
} from '@capacitor-community/admob';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-reward-video',
  templateUrl: './reward-video.component.html',
  styleUrls: ['./reward-video.component.scss'],
})
export class RewardVideoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  async showRewardVideo() {
    //get ids for banner and others from created admob adunit.
    // note ids are production only ,so only use them in prod
    // if testing or dev use blank or dummy string as below for ids
    const adId = isPlatform('ios') ? 'ios-ad-id' : 'android-ad-id';

    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared rewardVideo
    });

    AdMob.addListener(
      RewardAdPluginEvents.Rewarded,
      (rewardItem: AdMobRewardItem) => {
        // Subscribe user rewarded
        console.log(rewardItem);
      }
    );

    const options: RewardAdOptions = {
      adId,
      // isTesting: true
      // npa: true
      // ssv: {
      //   userId: "A user ID to send to your SSV"
      //   customData: JSON.stringify({ ...MyCustomData })
      //}
    };
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd();
  }
}
