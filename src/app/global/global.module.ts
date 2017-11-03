import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlimScrollModule } from 'ng2-slimscroll';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';
import 'hammerjs';
import { MaterialModule, MdNativeDateModule} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AuthhttpModule } from "./authhttp/authhttp.module";

 
export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  nerve_token_key:string;
  api_base_url: string;
  login_url:string;
  profile_personal_info_url:string;
  profile_communication_url: string;
  profile_corporate_url: string;
  profile_biological_url: string;
  profile_identity_url: string;
  country_url: string;
  profile_banking_url: string;
  profile_bloodgroup_url: string;
  profile_communication_type_url: string;
  profile_member_list: string;
  profile_banking_account: string;
  forgot_password_url: string;
  changepassword_url:string;
  profile_roles_url: string;
  profile_managers_url: string;
  profile_branches_url: string;
  profile_department_url: string;
  profile_designation_url: string;

  provider_url: string;
  provider_url2: string;
  provider_master_services: string;
  provider_udpate_services: string;
  provider_banking_ifsc: string;
  
  mou_type_master: string;
  mou_annexures: string;

  // profile
  profile_personal_update_url:string;
  profile_corporate_update_url:string;
  profile_biological_update_url: string;
  profile_banking_update_url: string;
  profile_branch_url: string;
  profile_identity_update_url: string;


   // outlets
  outletContact: string;
  outlet: string;

  // Transtions
  transaction_url:string;

// Master
  services_url: string;
  Identity_url: string;

}

export const APP_DI_CONFIG: AppConfig = {

  api_base_url: 'http://192.168.9.50/v2/apis/auth/',
  
  //api_base_url: 'https://www.h3u.com/v2/apis/auth/',
  
  //api_base_url: 'https://www.h3u.com/v2/apis/nerve/',
  // api_base_url: 'http://192.168.9.50/v2/apis/nerve/',
 //api_base_url: 'http://182.71.190.154/nerveapi/',
  login_url:"auth/login",
  nerve_token_key:"h3u_nerve_usertoken",
  profile_personal_info_url:"users/me/profile/personal",
  profile_communication_url: "users/me/profile/communication",
  profile_corporate_url: "users/me/profile/corporate",
  profile_biological_url: "users/me/profile/biological",
  profile_identity_url: "users/me/profile/identity",
  country_url: "masters/countries",
  profile_banking_url: "users/me/profile/banking",
  profile_bloodgroup_url: "masters/bloodgroups",
  profile_communication_type_url: "masters/ContactTypes",
  profile_member_list: 'members',
  profile_banking_account: 'masters/accounts',
  forgot_password_url: 'auth/password/reset',
  changepassword_url:'auth/password/change',
  profile_roles_url: 'masters/Role',
  profile_managers_url: 'masters/Manager/',
  profile_branches_url: 'masters/Branches',
  profile_department_url: 'masters/Departments',
  profile_designation_url: 'masters/Designations',

  provider_url: 'Providers/',
  provider_url2: 'Provider/',
  provider_master_services: 'masters/servicecategories',
  provider_udpate_services: 'Providers/ProviderServicesCategories',
  provider_banking_ifsc: 'masters/banks/ifsc/',

  mou_type_master: 'masters/mouTypes',
  mou_annexures: 'masters/mouAnnexures',

  // profiles
  profile_personal_update_url:'users/profile/personal',
  profile_corporate_update_url: 'users/me/profile/corporate',
  profile_biological_update_url: "users/profile/biological",
  profile_banking_update_url: "users/profile/banking",
  profile_branch_url: "masters/branches",
  profile_identity_update_url: "users/profile/identity",

  //outlets
  outletContact: 'ProviderOutletContacts/',
  outlet: 'Outlet/',

  //transaction
  transaction_url:'products/',

  // master

  services_url:"masters/servicecategories",
  Identity_url:"masters/IdentityTypes"

  //Mast
  // services_url:"masters/servicecategories"
};

@NgModule({
  imports: [
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule,
    [MaterialModule,MdNativeDateModule],
    NgxDatatableModule,
    AuthhttpModule,
    SlimScrollModule,
    ReactiveFormsModule,
    FileDropModule,
  ],
  declarations: [],
  exports:[
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    MdNativeDateModule,
    NgxDatatableModule,
    AuthhttpModule,
    SlimScrollModule,
    ReactiveFormsModule,
    FileDropModule
  ],
  providers:[{ provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class GlobalModule { 
 }
