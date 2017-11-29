import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TransactionService {
invoiceData: any = {};
getpdf:any;
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

  getCouponTransaction(couponNumber:any) {
    return this.authhttp.get(this.config.api_base_url+this.config.transaction_cupon_url+couponNumber)
      .map(data => {
          data.json();
          return data.json();
      });
  }


  getDateFilter(id:number,strdate:Date,endDate:Date) {
    debugger;
    return this.authhttp.get(this.config.api_base_url+this.config.transactionInvoice_url+id+"/"+strdate+"/"+endDate)
      .map(data => {         
         data.json();
          return data.json();
      });
  }

  getTransactionInvoce(id:any) {
   // debugger;
    return this.authhttp.get(this.config.api_base_url+this.config.transactionInvoice_url+id+"/invoice")
      .map(data => {         
         data.json();
          return data.json();
      });
  }

  getViewInvoicedata() {
    //debugger;
    return this.authhttp.get(this.config.api_base_url+this.config.getBasicDetails_url)
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
        //debugger;
        this.invoiceData = data.json();
        data.json();
        return data.json();
      });
  }

 rejectTransaction(value:any) {
    
    return this.authhttp.post(
        this.config.api_base_url+this.config.reject_url, 
        value
      )
      .map(data => {          
          data.json();          
          return data.json();
      });
  }

  sendOTP(value:any) {    
    return this.authhttp.post(
        this.config.api_base_url+this.config.sendOTP_url, 
        value
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

   verifyOTP(value:any) {    
    return this.authhttp.post(
        this.config.api_base_url+this.config.verifyOTP_url, 
        value
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  transactionPost(value:any) {
      debugger;
    return this.authhttp.post(
        this.config.api_base_url+this.config.postTransaction_url,value
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }



   getpayableAmount(value:any) {
    return this.authhttp.post(this.config.api_base_url+this.config.amountvalidate_url, value)
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

   getAllTransactionList() {
    return this.authhttp.get(this.config.api_base_url+this.config.transactionList_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }  

}