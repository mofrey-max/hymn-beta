import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [

  ];

  constructor() {
    //this.initializeApp();
  }

/*   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.AuthService.authenticationState.subscribe (state => {
      console.log('Auth changed', state);
      if (state) {
          this.router.navigate(['members', 'dashboard']);
      } else {
        this.router.navigate(['login']);
      }
      });
    });
  } */


}
