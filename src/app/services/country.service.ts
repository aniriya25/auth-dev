import { Injectable , Inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from './../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class CountryService {
  
 
 constructor(
   private authhttp: AuthHttp,
   @Inject(APP_CONFIG) private config: AppConfig
 ) { }

  
  getCountries() {
    return this.authhttp.get(this.config.api_base_url+this.config.country_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }
  

  getStates(countryId: number) {
   // console.log(this.config.api_base_url+this.config.country_url+"/"+countryId+"states");
    return this.authhttp.get(this.config.api_base_url+this.config.country_url+"/"+countryId+"/states")
      .map(data => {
          data.json();
          return data.json();
      });
    // return [
    //   {id: 1, countryid: 1, name: 'Arizona'},
    //   {id: 2, countryid: 1, name: 'LasVegas'},
    //   {id: 3, countryid: 2, name: 'Goa'},
    //   {id: 4, countryid: 3, name: 'Tasmania'}
    // ]
  }

   getCities() {
    return [
      {id: 1, stateid: 1, name: 'Mesa'},
      {id: 2, stateid: 1, name: 'Sedona'},
      {id: 3, stateid: 2, name: 'Reno'},
      {id: 4, stateid: 3, name: 'Mormugao'},
      {id: 5, stateid: 4, name: 'New Norfolk'}
    ]
  }


}

