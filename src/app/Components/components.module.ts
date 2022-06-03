import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { InterstitialComponent } from './interstitial/interstitial.component';
import { RewardVideoComponent } from './reward-video/reward-video.component';

@NgModule({
  declarations: [BannerComponent, InterstitialComponent, RewardVideoComponent],
  imports: [CommonModule, IonicModule],
  exports: [BannerComponent, InterstitialComponent, RewardVideoComponent],
})
export class ComponentsModule {}
