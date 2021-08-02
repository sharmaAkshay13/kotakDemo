import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR"


  constructor(private http: HTTP) { }

  getCall(headers, successCallback, failureCallback) {
    this.http.setDataSerializer("json");
    this.http.get(this.url, {}, headers)
      .then(data => {
        return successCallback(JSON.parse(data.data));
      })
      .catch(error => {
        return failureCallback(error);
      });
  }
}
