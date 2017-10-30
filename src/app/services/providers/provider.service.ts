import { Injectable , Inject} from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProviderService {
  isBasicFieldset;

  constructor(
    private _http: Http,
     private authhttp: AuthHttp,
     @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  totalProvider = [
    {
      totalProvider: 3,
      newApproval: 4,
      inProgress: 5,
      approved: 6,
      pendingProvider: 10,
      newProvider: 5,
      data: [
        {id: 1, brand: 'assets/images/dummy_logo.png', company: 'Escort Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 28.391492, lonitude: 77.306794},
        {id: 2, brand: 'max.jpg', company: 'Max Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 30.192387, lonitude: 74.946980},
        {id: 3, brand: 'holy_Family.jpg', company: 'Holy Family Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 42.727801, lonitude: -71.168323},
      ]
    }
  ];

  newApproval = [
    {
      totalProvider: 3,
      newApproval: 4,
      inProgress: 5,
      approved: 6,
      pendingProvider: 10,
      newProvider: 5,
      data: [
        {id: 1, brand: 'Bon.jpg', company: 'Bon Secours St. Francis Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 2, brand: 'Cannon.jpg', company: 'Cannon Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 3, brand: 'HCarolina.jpg', company: 'HCarolina Pines Regional Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 4, brand: 'Carolinas.jpg', company: 'Carolinas Hospital System', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
      ]
    }
  ];

  inProgress = [
    {
      totalProvider: 3,
      newApproval: 4,
      inProgress: 5,
      approved: 6,
      pendingProvider: 10,
      newProvider: 5,
      data: [
        {id: 1, brand: 'Carolinas.jpg', company: 'Carolinas Hospital System - Marion', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 2, brand: 'Chester.jpg', company: 'Chester Regional Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 3, brand: 'Clarendon.jpg', company: 'Clarendon Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 4, brand: 'Coastal.jpg', company: 'Coastal Carolina Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 5, brand: 'Colleton.jpg', company: 'Colleton Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
      ]
    }
  ];

  approved = [
    {
      totalProvider: 3,
      newApproval: 4,
      inProgress: 5,
      approved: 6,
      pendingProvider: 10,
      newProvider: 5,
      data: [
        {id: 1, brand: 'Conway.jpg', company: 'Conway Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 2, brand: 'East.jpg', company: 'East Cooper Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 3, brand: 'Edgefield.jpg', company: 'Edgefield County Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 4, brand: 'Fairfield.jpg', company: 'Fairfield Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 5, brand: 'Carolinas.jpg', company: 'Georgetown Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
        {id: 6, brand: 'Georgetown.jpg', company: 'Greer Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum'},
      ]
    }
  ];

  getAllProvider1() {
    return this.totalProvider;
  }
  
  // get all provider
  getAllProvider() {
     return this.authhttp.get(this.config.api_base_url+this.config.provider_url)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // get provider by id
  getProviderById(id: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+id)
      .map(data => {
          data.json();
          return data.json();
      });
  }

  // create provider basic informtion
  createProviderBasicInfo(basicInfo: any) {
    let _basicInfo = JSON.stringify(basicInfo);
     return this.authhttp.post(
       this.config.api_base_url+this.config.provider_url, 
       _basicInfo
     )
     .map(data => {
         data.json();
         return data.json();
     });
   }

  // update provider basic information
  updateProviderBasicInfo(basicInfo: any, id: number) {
    let _basicInfo = JSON.stringify(basicInfo);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url+id, 
      _basicInfo
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get all provider services - master list
  getAllProviderServices() {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_master_services)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - create signatory
  createSignatory(basicInfo: any, id:number) {
    let _signatory = JSON.stringify(basicInfo);
     return this.authhttp.post(
       this.config.api_base_url+this.config.provider_url+id+'/signatoryPerson', 
       _signatory
     )
     .map(data => {
         data.json();
         return data.json();
     });
   }

  // provider - update Signatory
  updateSignatory(signatory: any, id: number) {
    let _signatory = JSON.stringify(signatory);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url+id+'/signatoryPerson', 
      _signatory
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - create Contact
  createContact(contact: any, id:number) {
    let _contact = JSON.stringify(contact);
     return this.authhttp.post(
       this.config.api_base_url+this.config.provider_url+id+'/contactPerson', 
       _contact
     )
     .map(data => {
         data.json();
         return data.json();
     });
   }

  // provider - update contact
  updateContact(contact: any, id: number) {
    let _contact = JSON.stringify(contact);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url+id+'/contactPerson', 
      _contact
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - create banking
  createProviderBanking(banking: any, id: number) {
    let _banking = JSON.stringify(banking);
    return this.authhttp.post(
      this.config.api_base_url+this.config.provider_url2+'banking/'+id, 
      _banking
    )
    .map(data => {
        data.json();
        return data.json();
    });
  } 

  // provider - update bannking
  updateProviderBanking(banking: any, providerId: number, bankingId: number) {
    let _banking = JSON.stringify(banking);
    return this.authhttp.put(
      this.config.api_base_url+this.config.provider_url2+providerId+'/banking/'+bankingId, 
      _banking
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - create services
  createServices(service: any, id:number) {
    let _service = JSON.stringify(service);
     return this.authhttp.post(
       this.config.api_base_url+this.config.provider_url+'/ServicesCategories', 
       _service
     )
     .map(data => {
         data.json();
         return data.json();
     });
   }  

   // provider - update services
  updateServices(service: any) {
    let _services = JSON.stringify(service);
    return this.authhttp.post(
      this.config.api_base_url+this.config.provider_url+'/ServicesCategories', 
      _services
    )
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get all provider type  - master  list
  getProviderTypeList() {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+'types')
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - get ifsc details
  getIfscDetail(ifsc: any) {
     return this.authhttp.get(this.config.api_base_url+this.config.provider_banking_ifsc+ifsc)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get mous type master
  getMouTypeMaster() {
    return this.authhttp.get(this.config.api_base_url+this.config.mou_type_master)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // get mous annexures master
  getMouAnnexures() {
    return this.authhttp.get(this.config.api_base_url+this.config.mou_annexures)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - create provider mou
  createProviderMou(mou: any, providerId: number) {
    //return console.log(mou);
    let _mou = JSON.stringify(mou);
     return this.authhttp.post(
       this.config.api_base_url+this.config.provider_url+providerId+'/mous', 
       _mou
     )
     .map(data => {
         data.json();
         return data.json();
     });
  }

// provider - mou annexures
  getMouVersionList(providerId: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+providerId+'/mous')
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - mou annexures version by id
  getMouAnnxureById(providerId: number, mouId: number) {
    return this.authhttp.get(this.config.api_base_url+this.config.provider_url+providerId+'/mous/'+mouId)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // provider - update provider mou
  updateProviderMou(mou: any) {
    return console.log(mou);
  }

  providerType(name: string) {
    switch(name) {
      case 'all':
        return this.totalProvider;
      case 'newApproval':
        return this.newApproval;
      case 'inProgress':
        return this.inProgress;
      case 'approval':
        return this.approved;
    }
  } 
  

  // get provider details
  getProviderDetails(id: number) {
    let rec = this.totalProvider[0].data;
    for(var i = 0; i < rec.length; i++) {
      if(rec[i].id == id) {
        return rec[i];
      }
    }
  }

   tesetGetVal(isFrmDisable: boolean) {
    this.isBasicFieldset = isFrmDisable;
    return this.isBasicFieldset;
  }
 

  

  

 
}



