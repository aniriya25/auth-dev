import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class InvoiceService {
   constructor(private _http: Http,
    private authhttp: AuthHttp,
    @Inject(APP_CONFIG) private config: AppConfig) { }

    getInvoiceDetails(){
      return this.authhttp.get(this.config.api_base_url+this.config.getallTransaction_url)
      .map(data => {
          data.json();
          return data.json();
      });
    }

    getInvoiceDetailsInproccess(){
        // debugger
        return this.authhttp.get(this.config.api_base_url+this.config.getInprocessTransaction_url)
        .map(data => {
            data.json();
            return data.json();
        });
      }

   getPaidInvoiceOutlet(){
        // debugger
        return this.authhttp.get(this.config.api_base_url+this.config.getPaidInvoiceOutlet_url)
        .map(data => {
            data.json();
            return data.json();
        });
      } 

    getPaidInvoiceAccount(){
        debugger
        return this.authhttp.get(this.config.api_base_url+this.config.getPaidInvoiceAccount_url)
        .map(data => {
            data.json();
            return data.json();
        });
      }       

   updateValidateAmount(updateValidateAmount, id) {
      let _updateValidateAmount = JSON.stringify(updateValidateAmount);
        return this.authhttp.put(
        this.config.api_base_url+this.config.putValidate_url+id+"/validate",
        _updateValidateAmount
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

   getInvoiceDateFilter(strdate:Date,endDate:Date) {
    debugger;
    return this.authhttp.get(this.config.api_base_url+this.config.getInvoiceDateFilter+"/"+strdate+"/"+endDate)
     .map(data => {         
         data.json();
          return data.json();
      });
  }


  postRejectTransaction(value:any, id){
       return this.authhttp.post(this.config.api_base_url+this.config.postRejectTransaction_url+id+"/reject", value)
        .map(data => {
            data.json();
            return data.json();
        });
   }

  postInvoicePaid(value:any){
       return this.authhttp.post(this.config.api_base_url+this.config.postInvoicePaid_url, value)
        .map(data => {
            data.json();
            return data.json();
        });
    }

   updateAccountAmount(updateAccountAmount, id) {
      let _updateAccountAmount = JSON.stringify(updateAccountAmount);
        return this.authhttp.put(
        this.config.api_base_url+this.config.putValidate_url+id+"/paid",
        _updateAccountAmount
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  getStatus() {
    return this.authhttp.get(this.config.api_base_url+this.config.getStatus_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }
  

}
