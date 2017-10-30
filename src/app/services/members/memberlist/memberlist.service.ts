import { Injectable , Inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MemberlistService {

  constructor(
    private _http: Http,
    private authhttp: AuthHttp,
     @Inject(APP_CONFIG) private config: AppConfig  
  ) { }

  
  // all member list 
  getMemberList(id: string) {
     return this.authhttp.get(this.config.api_base_url+this.config.profile_member_list+"/"+id)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // delte member
  delMember(deleteMember) {
    console.log(deleteMember);
  }

  // get role master list
  getAllRole() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_roles_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get manager by role id
    getManagers(id:any) {
      return this.authhttp.get(this.config.api_base_url+this.config.profile_managers_url+id)
      .map(data => {
          data.json();
          return data.json();
      });
    }

// get all branches
    getAllBranches(){
      return this.authhttp.get(this.config.api_base_url+this.config.profile_branches_url)
      .map(data => {
          data.json();
          return data.json();
      });
    }

  // get all departments
  getAllDepartments() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_department_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get all designation
  getAllDesignation() {
    return this.authhttp.get(this.config.api_base_url+this.config.profile_designation_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }
 }

