import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { InterstitialComponent } from './interstitial/interstitial.component';

@NgModule({
  declarations: [BannerComponent, InterstitialComponent],
  imports: [CommonModule, IonicModule],
  exports: [BannerComponent, InterstitialComponent],
})
export class ComponentsModule {}
