import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TransactionService {

  constructor(
    private _http: Http,
     private authhttp: AuthHttp,
     @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  getTransaction(cardNumber:any) {
    return this.authhttp.get(this.config.api_base_url+this.config.transaction_url+cardNumber)
      .map(data => {
          data.json();
          return data.json();
      });
  }

    updateTransaction(value:any) {    
    return this.authhttp.post(
        this.config.api_base_url+this.config.cardDetails_update_url, 
        value
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  getTransactionList(id: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.transaction_url+id)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  getIdentity() {
    return this.authhttp.get(this.config.api_base_url+this.config.Identity_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }


  

}

