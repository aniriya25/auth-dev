import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, AppConfig } from './../../../global/global.module';


@Injectable()
export class ForgotpasswordService {
  public abc: any;
  constructor(
     private _http: Http,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }


// forgot password
  forgotPassword(email) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this._http.post(this.config.api_base_url + this.config.forgot_password_url
      ,'{"username":"'+email+'"}'
      ,options
      )
      .map(data=>data.json());
  }

}
