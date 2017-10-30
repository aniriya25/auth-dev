import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OutletService {

constructor(
    private _http: Http,
     private authhttp: AuthHttp,
     @Inject(APP_CONFIG) private config: AppConfig
  ) { }
  
 // get all outlets
  getOutlets(providerId: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+providerId+'/outlets')
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get outlet detaits
  getOutletDetails(providerId: number, outletId: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+providerId+'/outlets/'+outletId)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // create outlet basic information
  createBasicInfo(basicObj: any, _pId: number) {
    let _basicObj = JSON.stringify(basicObj);
    return this.authhttp.post(
      this.config.api_base_url+this.config.provider_url+_pId+'/outlets/', 
      _basicObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // update outlet basic information 
  udpateBasicInfo(basicObj: any, _pId: number, _oId: number) {
    let _basicObj = JSON.stringify(basicObj);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url+_pId+'/outlets/'+_oId, 
      _basicObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // create outlet contact
  createContact(contactObj: any, _oId: number) {
    let _contactObj = JSON.stringify(contactObj);
    return this.authhttp.post(
      this.config.api_base_url+this.config.outletContact+_oId, 
      _contactObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // updte outlet infra
  updateContact(contactObj: any, contactId: number) {
    let _contactObj = JSON.stringify(contactObj);
    return this.authhttp.put(
      this.config.api_base_url+this.config.outletContact+contactId, 
      _contactObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // update outlet infra
  updateInfra(infraObj: any, _pId: number, _oId: number) {
    let _infraObj = JSON.stringify(infraObj);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url+_pId+'/outlets/'+_oId+'/infra', 
      _infraObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // create outlet banking
  createBanking(bankingObj: any, _oId: number) {
    let _bankingObj = JSON.stringify(bankingObj);
    return this.authhttp.post(
      this.config.api_base_url+this.config.outlet+'banking/'+_oId, 
      _bankingObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // update outlet banking
  updateBanking(bankingObj: any, _oId: number, bankingId: number) {
    let _bankingObj = JSON.stringify(bankingObj);
    return this.authhttp.put(
      this.config.api_base_url+this.config.outlet+_oId+'/banking/'+bankingId, 
      _bankingObj
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // create outlet mou
  createMou() {
    return console.log("create outlet mou");
  }

  // update outlet mou
  updateMou() {
    return console.log("update outlet mou");
  }

  // get mou version by id
  getMouVersion() {
    return [
      {id: 1, name: '1.1'},
      {id: 2, name: '1.2'},
      {id: 3, name: '1.3'}
    ]
  }

  getMouAnxrById(id: number) {
    return console.log("Anrx Id ---------- : " + id);
  }

  //get outlet types - master
  getOutletTypes() {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+'types')
    .map(data => { 
        data.json();
        return data.json();
    });
  }

  // get outlet bank detail based on ifsc
  getIfscDetail(ifscCode: any) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_banking_ifsc+ifscCode)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get outlet - mout types
  getMoutTypes() {
    return this.authhttp.get(this.config.api_base_url+this.config.mou_type_master)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get outlet annexures
  getAnnexures() {
    return this.authhttp.get(this.config.api_base_url+this.config.mou_annexures)
    .map(data => {
        data.json();
        return data.json();
    });
  }


}
