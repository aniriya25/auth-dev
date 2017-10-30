import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private _http: Http) { }
  getData(){
    //console.log("test");
     return this._http.get("http://jsonplaceholder.typicode.com/posts")
    .map(res => res.json());
  }
}
