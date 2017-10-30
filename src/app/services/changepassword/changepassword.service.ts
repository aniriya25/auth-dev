import { Injectable,Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ChangepasswordService {

  constructor(
    private authhttp:AuthHttp,
    @Inject(APP_CONFIG) private config: AppConfig,
    private http:Http
  ) { }

  updateChangePassword(requestdata,token){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("token",token);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.config.api_base_url+this.config.changepassword_url,requestdata,options)
      .map(data => {
          data.json();
          return data.json();
      });
  }

}
