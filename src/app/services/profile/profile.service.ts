
import { Injectable , Inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProfileService {

  constructor(private _http: Http,
     private authhttp: AuthHttp,
     @Inject(APP_CONFIG) private config: AppConfig

  ) { }

  // get personal information data
  getPersonalInfo() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_personal_info_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // update personal information data
  updatePersonalInfo(updatePersonalInfo: any) {
    let _updateInfo = JSON.stringify(updatePersonalInfo);
    return this.authhttp.put(
        this.config.api_base_url+this.config.profile_personal_update_url, 
        _updateInfo
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get communication data
  getCommunication() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_communication_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // updated communication data
  updateCommunication(updateCommunication) {
      let _updateComm = '{"data": [' +JSON.stringify(updateCommunication)+']}';
   return this.authhttp.put(
        this.config.api_base_url+this.config.profile_communication_url, 
        _updateComm
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get corporate data
  getCorporate() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_corporate_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // update corporate data
  updateCorporate(updateCorporate) {
      let _updateCorporate = JSON.stringify(updateCorporate);
        return this.authhttp.put(
        this.config.api_base_url+this.config.profile_corporate_update_url, 
        _updateCorporate
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get biological data 
  getBiological() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_biological_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // update biological data
  updateBiological(updateBiological) {
    let _updateBiological = JSON.stringify(updateBiological);
    return this.authhttp.put(
        this.config.api_base_url+this.config.profile_biological_update_url, 
        _updateBiological
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get identity data
  getIdentity() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_identity_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // udpate identity data
  updateIdentity(identity) {
      let _updateIdentity = JSON.stringify(identity);
        return this.authhttp.put(
        this.config.api_base_url+this.config.profile_identity_update_url, 
        _updateIdentity
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get banking data
  getBanking() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_banking_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // update banking
  updateBanking(banking) {
       let _updateBanking = JSON.stringify(banking);
   return this.authhttp.put(
        this.config.api_base_url+this.config.profile_banking_update_url, 
        _updateBanking
      )
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get blood group list from master
  getBloodGroup() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_bloodgroup_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get Brach list from master
   getBrach() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_branch_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get Departments list from master
  getDepartments() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_department_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get Designation list from master
  getDesignation() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_designation_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

 // get Branches list from master
  getBranches() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_branches_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get communication type from master
  getCommunicationType() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_communication_type_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }  

// Banking - account type master list
  getAccountType() {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_banking_account)
      .map(data => {
          data.json();
          return data.json();
      });
  }
}



