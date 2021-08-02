import { Component, QueryList, ViewChildren } from '@angular/core';

import { ActionSheetController, AlertController, MenuController, NavController, Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;

  email: any;
  token: any;
  userDetails: any;
  user_name: string = '';
  profileImg = "../assets/icon/profile.svg";
  versionNumber: string;
  isUploadBtn: Boolean = false;

  fileData: File;
  // base64: string = "";
  profile_pic = "";
  roleAccess = {
    fi: '',
    pdi: '',
    profile: '',
    jc: '',
    notification: ''
  }
  loginId: any;
  userName: any = "";
  dealerCode: any = "";
  constructor(
    private platform: Platform, private location: Location,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent()
      this.splashScreen.hide();

      // this.webIntent.getIntent().then((res: any) => {
      //   let resp = res.extras;
      //   let token = resp.token.replace('Bearer ', '');
      //   var jwtToken = atob(token);
      //   var decodeToken: any = jwt_decode(jwtToken)
      //   var exp_time = moment.unix(decodeToken.exp).format('YYYY-MM-DD HH:mm:ss');
      //   this.global.setStorage('expTime', exp_time);
      //   this.setUserName(resp.user_id, resp.dealer_code);
      //   this.global.setStorage('loginData', resp).then((res) => {
      //     this.router.navigateByUrl('/dashboard')
      //   });
      // })
    });
  }




}
