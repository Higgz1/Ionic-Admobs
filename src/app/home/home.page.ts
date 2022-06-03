import { Component } from '@angular/core';
import { AdMob } from '@capacitor-community/admob';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    this.initialize();
  }

  async initialize() {
    const { status } = await AdMob.trackingAuthorizationStatus();
    console.log(status);
    AdMob.initialize({
      requestTrackingAuthorization: true,
      testingDevices: ['My test dEvice Id'],
      initializeForTesting: true,
    });
  }
}
