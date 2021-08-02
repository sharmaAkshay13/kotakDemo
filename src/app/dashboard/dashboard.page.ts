import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import { ApiManagerService } from '../services/api-manager.service';
import { CommonFunctionsService } from '../services/common-functions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data = [];

  constructor(private router: Router,
    private httpCall: ApiManagerService,
    private toastController: ToastController,
    private lodingCtrl: LoadingController,
    public commonData: CommonFunctionsService) {

  }
  ngOnInit() {
    this.getData();
  }

  //api call to get data
  getData() {
    if (navigator.onLine) {
      this.lodingCtrl.create({
        message: "Please wait..."
      }).then((loadingElement) => {
        loadingElement.present();
        this.httpCall.getCall(
          {
            'X-CMC_PRO_API_KEY': 'd8afff11-19aa-4263-b0d9-08c4e6d66722',
            'Access-Control-Allow-Origin': '*',
          },
          this.onSuccess,
          this.onFailure
        )
      })
    } else {
      this.presentToast('Please Check your internet connection.')
    }
  }

  // success callback
  onSuccess = (res) => {
    this.lodingCtrl.dismiss();
    this.data = res.data
  }

  // failure callback
  onFailure = (err) => {
    this.lodingCtrl.dismiss();
    console.log(err);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  itemClicked(index) {
    this.commonData.selectedData = this.data[index]
    this.router.navigateByUrl('/details')
  }




  getIcon(id) {
    let imgUrl = "https://s2.coinmarketcap.com/static/img/coins/64x64/" + id + ".png";
    return imgUrl
  }





















}
