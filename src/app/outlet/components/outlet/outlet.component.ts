import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OutletService } from './../../../services/outlet/outlet.service';
import { ProviderService } from './../../../services/providers/provider.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css'],
  providers: [OutletService, ProviderService, MdSnackBar]
})
export class OutletComponent implements OnInit {
  private providerName = true;
  isBasicActive: boolean;
  isContactActive: boolean;
  isInfraActive: boolean;
  isBankingActive: boolean;
  isMousActive: boolean;
  isServiceCatActive: boolean;
  isSelectdService: boolean;

  isOutletBasicFieldset: boolean;
  isOutletEditBtn: boolean;
  outletBasicFormOnverlay: boolean;
  btnText: string;
  outletBasicInfoInput: object = {};
  watchOutlet:object = {};
  latitude: number;
  longitude: number;

  isContactFormOverlay: boolean;
  isContactFieldset: boolean;
  isOutletContactBtn: boolean;
  outContactInput = [];
  contactSubmitBtn: string;

  isInfraOverlay: boolean;
  isInfraFieldset: boolean;
  isInfraBtn: boolean;
  infraInput: Object = {};
  infraSubmitBtn: string;

  isOutletBankingOverlay: boolean;
  isOutletBankingFieldset: boolean;
  isOutletBankingBtn: boolean;
   outletTypes = [];
  outletBankingInput:object = {};
  branches = [];
  bankingSubmitBtn: string;

  isServicesOverlay: boolean;
  isServicesBtn: boolean;
  isServicesFieldset: boolean;
  isOPDFieldset: boolean;
  
  outletMouOverlay: boolean;
  isOutletFieldset: boolean;
  isOutletMouBtn: boolean;
  mouVer: boolean;
  mouTypes = [];
  annexures = [];
  outletMouInput:object = {};
  outletMouVersions = [];

  serviceContacts = [];

  _pId: number;
  _oId: number;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router,
    private _outlet: OutletService,
    private snackBar: MdSnackBar,
    private _ProviderService : ProviderService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((Params: Params) =>{
      console.log(Params['pid']);
      console.log(Params['outletId']);

      // if(Params['pid'] == undefined) {
      //   this._router.navigate(['/dashboard/providers/provider']);
      // }

      if((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
        
        if(isNaN(Params['pid'])) {
          this._router.navigate(['/dashboard/providers/provider']);
        }
        this.isOutletEditBtn = true;
        this.btnText = "SUBMIT";

        this.isContactFormOverlay = true;
        this.isOutletContactBtn = true;

        this.isInfraOverlay = true;
        this.isInfraBtn = true;

        this.isOutletBankingOverlay = true;
        this.isOutletBankingBtn = true;

        this.isServicesOverlay = true; 

        this.outletMouOverlay = true;
        this.isOutletMouBtn = true;
        this.mouVer = true;

        this.getProviderById(Params['pid']);
      }
      if((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
        if(isNaN(Params['pid']) || isNaN(Params['outletId'])) {
          this._router.navigate(['/dashboard/providers/provider']);
        }
        this._pId = Params['pid'];
        this._oId = Params['outletId'];
        this.isOutletBasicFieldset = true;
        this.btnText = "UPDATE";

        this.isContactFieldset = true;

        this.isInfraFieldset = true;

        this.isOutletBankingFieldset = true;

        this.isServicesFieldset = true;
        this.isOPDFieldset = true;

        this.isOutletFieldset = true;

        this.mouVer = false;

        this.getOutletList(this._pId, this._oId);
      }
    });
    // if(this.myString != true) 
    //   this._router.navigate(['/dashboard/providers/provider']);

    this.contactSubmitBtn = "SUBMIT";
    this.infraSubmitBtn = "SUBMIT";
    this.bankingSubmitBtn = "SUBMIT";
    this.getProviderType();
    this.moutType();
    this.getAnnexuresList();
    this.getMouVersions();
  }

  outletBasicInfoFx(eve) { 
    //console.log(this.outletBasicInfoInput);
   
    //console.log(eve);
    if(eve['_type'] == 'editFrm') {
      this.isOutletBasicFieldset = false;
      this.outletBasicFormOnverlay = false;
      this.isOutletEditBtn = true;
      return false;
    }

     this.outletBasicInfoInput['id'] = '';
     this.watchOutlet['name'] = eve['name'];
     this.watchOutlet['address'] = eve['address'];
     this.watchOutlet['accreditation'] = eve['accreditation'];
     this.watchOutlet['regdName'] = eve['regdName'];
     this.watchOutlet['webLink'] = eve['webLink'];
     this.watchOutlet['latitude'] = eve['latitude'];
     this.watchOutlet['longitude'] = eve['longitude'];
     this.watchOutlet['state'] = eve['state'];
     this.watchOutlet['city'] = eve['city'];
     this.watchOutlet['pincode'] = eve['pincode'];
     this.watchOutlet['logoLink'] = eve['logoLink'];
    
    this.activatedRoute.params.subscribe((Params: Params) =>{
      if((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
        //console.log("Submit");
        if(eve['_type'] = 'submitFrm') {
          this._outlet.createBasicInfo(this.watchOutlet, Params['pid'])
            .subscribe(data => {
              if(data['message']) {
                this.snackBar.open("Created successfully","",{duration:5000});
                this.isBasicActive = true;
                return false;
              }
              if(data['error']['code'] == 304) {
                this.snackBar.open("Something went wrong","",{duration:5000});
              }
            }, Error => {
              this.snackBar.open("Something went gone wrong!","",{duration:5000});
            })
          this.outletBasicFormOnverlay = true;
          this.isOutletEditBtn = false;
          
          this.isContactFormOverlay = false;
          this.isInfraOverlay = false;
          this.isOutletBankingOverlay = false;
          this.isServicesOverlay = false;
          this.outletMouOverlay = false;
          this.isServicesBtn = true;
        }
        return false;
      }
      if((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
        //console.log("Update");
        if(eve['_type'] = 'submitFrm') {
          this.watchOutlet['id'] = eve['id'];
          this._outlet.udpateBasicInfo(this.watchOutlet, Params['pid'], Params['outletId'])
            .subscribe(data => {
              if(data['message']) {
                this.snackBar.open("Updated successfully","",{duration:5000});
                return false;
              }
              if(data['error']['code'] == 304) {
                this.snackBar.open("Something went wrong","",{duration:5000});
              }
            }, Error => {
              this.snackBar.open("Something went gone wrong","",{duration:5000});
            })
          this.isOutletBasicFieldset = true;
          this.isOutletEditBtn = false;
          return false;
        }
      }
    });
  }

  outletContactFx(eve) {
    if(eve['_type'] == 'editFrm') {
      this.isContactFieldset = false;
      this.isContactFormOverlay = false;
      this.isOutletContactBtn = true;
      return false;
    }
    //alert(eve['id']);
    this.activatedRoute.params.subscribe((Params: Params) =>{
      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
        //console.log("contact submit");
        this._outlet.createContact(eve, Params['outletId'])
          .subscribe(data => {
            if(data['message']) {
              this.snackBar.open("Created Successfully","",{duration:5000});
              this.isContactActive = true;
              return false;
            }
            if(data['error']['code'] == 304) {
              this.snackBar.open("Something went wrong","",{duration:5000});
            }
          }, Error => {
            this.snackBar.open("Something went gone wrong","",{duration:5000});
          })
        this.isContactFormOverlay = true;
        this.isOutletContactBtn = false;
        return false;
      }

      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
        //console.log("update submit");
        this._outlet.updateContact(eve, eve['id']) 
          .subscribe(data => {
            if(data['message']) {
              this.snackBar.open("Updated successfully","",{duration:5000});
              return false;
            }
            if(data['error']['code'] == 304) {
              this.snackBar.open("Something went wrong","",{duration:5000});
            }
          }, Error => {
            this.snackBar.open("Something went gone wrong!","",{duration:5000});
          })
        this.isContactFieldset = true;
        this.isOutletContactBtn = false;
        return false;
      }
    });
  }

  outletInfraFx(eve) {
    if(eve['_type'] == 'editFrm') {
     this.isInfraOverlay = false;
     this.isInfraFieldset = false;
     this.isInfraBtn = true;
      return false;
    }

    if(eve['outletType'] == "2") {
      delete eve['noOfBeds'];
    }
   
    this.activatedRoute.params.subscribe((Params: Params) =>{
      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
        console.log('create');
        this._outlet.updateInfra(eve, Params['pid'], Params['outletId'])
        .subscribe(data => {
          if(data['message']) {
            this.snackBar.open("Created successfully","",{duration:5000});
            this.isInfraActive = true;
            return false;
          }
          if(data['error']['code'] == 304) {
            this.snackBar.open("Something went wrong","",{duration:5000});
          }
        }, Error => {
          this.snackBar.open("Something went gone wrong!","",{duration:5000});
        })
        this.isInfraOverlay = true;
        this.isInfraBtn = false;
        return false;
      }

      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
        //console.log('update');
        this._outlet.updateInfra(eve, Params['pid'], Params['outletId'])
          .subscribe(data => {
            if(data['message']) {
              this.snackBar.open("Updated successfully","",{duration:5000});
              return false;
            }
            if(data['error']['code'] == 304) {
              this.snackBar.open("Something went wrong","",{duration:5000});
            }
          }, Error => {
            this.snackBar.open("Something went gone wrong!","",{duration:5000});
          })
        this.isInfraFieldset = true;
        this.isInfraBtn = false;
        return false;
      }
    })
  }

  outletBankingFx(eve) {
    //console.log(eve);
    if(eve['_type'] == 'editFrm') {
     this.isOutletBankingOverlay = false;
     this.isOutletBankingFieldset = false;
     this.isOutletBankingBtn = true;
      return false;
    }

    //eve['chequeUrl'] = "http://192.168.9.50/nerveapi/DemoFolder/6767bf05-cab9-4c65-8c6a-edb358bdf362.pdf";
    this.activatedRoute.params.subscribe((Params: Params) =>{
      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] == undefined)) {
        //console.log("create");
        this._outlet.createBanking(eve, Params['outletId'])
          .subscribe(data => {
            if(data['message']) {
              this.snackBar.open("Created successfully","",{duration:5000});
              this.isBankingActive = true;
              return false;
            }
            if(data['error']['code'] == 304) {
              this.snackBar.open("Something went wrong","",{duration:5000});
            }
          },Error => {
            this.snackBar.open("Something went gone wrong!","",{duration:5000});
          })
        this.isOutletBankingOverlay = true;
        this.isOutletBankingBtn = false;
        return false;
      }

      if((Params['pid'] != undefined) && (Params['outletId'] != undefined) && (eve['id'] != undefined)) {
        //console.log("update");
        this._outlet.updateBanking(eve, Params['outletId'], eve['id'])
          .subscribe(data => {
            if(data['message']) {
              this.snackBar.open("Updated successfully","",{duration:5000});
              return false;
            }
            if(data['error']['code'] == 304) {
              this.snackBar.open("Something went wrong","",{duration:5000});
            }
          }, Error => {
            this.snackBar.open("Something went gone wrong!","",{duration:5000});
          })
        this.isOutletBankingFieldset = true;
        this.isOutletBankingBtn = false;
        return false;
      }
    });
  } 

  outletMouFx(eve) {
    console.log(eve);
    if(eve['_type'] == 'editFrm') {
     this.outletMouOverlay = false;
     this.isOutletFieldset = false;
     this.isOutletMouBtn = true;
      return false;
    }
     this.activatedRoute.params.subscribe((Params: Params) =>{
       if((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
          //console.log("create form");
          this._outlet.createMou();
          this.outletMouOverlay = true;
          this.isOutletMouBtn = false;
          return false;
       }

       if((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
         //console.log("update mou");
         this._outlet.updateMou();
         this.isOutletFieldset = true;
         this.isOutletMouBtn = false;
         return false;
       }
     });

     
  }

  outletServiceFx(eve) {
    //console.log(eve);
    if(eve['_type'] == 'editFrm') {
      this.isServicesOverlay = false;
      this.isServicesFieldset = false;
      this.isServicesBtn = true;
       return false;
     }

     this.activatedRoute.params.subscribe((Params: Params) =>{
      if((Params['pid'] != undefined) && ((Params['outletId'] == undefined))) {
        console.log('create service');
        return false;
      }

      if((Params['pid'] != undefined) && (Params['outletId'] != undefined)) {
        console.log("udpate service");
        return false;
      }
     });
  }

  getProviderType() {
    this._outlet.getOutletTypes() 
      .subscribe(data => {
        this.outletTypes = data.data;
        console.log(this.outletTypes);
      })
  }

  ifscFx(ifscCode) {
   this._outlet.getIfscDetail(ifscCode)
    .subscribe(data => {
      //console.log(data.data);
      this.outletBankingInput['name'] = data.data[0]['name'];
      this.outletBankingInput['address'] = data.data[0]['address'];
      this.outletBankingInput['city'] = data.data[0]['city'];
      this.outletBankingInput['state'] = data.data[0]['state'];
      this.outletBankingInput['branch'] = data.data[0]['id'];
      this.outletBankingInput['refBankId'] = data.data[0]['id'];
      this.branches = [{id: data.data[0]['id'], branch: data.data[0]['branch']}];
      
    })
  }

  moutType() {
    this._outlet.getMoutTypes() 
      .subscribe(data => {
        this.mouTypes = data.data;
      })
  }

  getAnnexuresList() {
    this._outlet.getAnnexures() 
      .subscribe(data => {
        this.annexures = data.data;
      })
  }

  getMouAnxrById(id: number) {
    this._outlet.getMouAnxrById(id);
  }

  getMouVersions() {
    this.outletMouVersions = this._outlet.getMouVersion();
  }

  getOutletList(pId: number, oId: number) {
    this._outlet.getOutletDetails(pId, oId)
      .subscribe(data => {
        console.log("----------");
        console.log(data.data);
        if(data.data) {
        if(data.data) {
          this.outletBasicInfoInput = data.data;
          console.log("itz my data basic information");
          console.log(this.outletBasicInfoInput);
          this.providerName = data.data['name'];
          this.latitude = Number(data.data['latitude']);
          this.longitude = Number(data.data['longitude']);
          this.outletBasicInfoInput['latlon'] = data.data['latitude'] + ', ' + data.data['longitude'];
          this.isBasicActive = true;
        }

        

        if(data.data['contactPersons'] != null) {
          this.outContactInput = data.data['contactPersons']; 
          this.serviceContacts = this.outContactInput;
          this.contactSubmitBtn = "UPDATE";
          this.isContactActive = true;
        } 
        
        if(data.data['outletInfra'] != null) {
          this.infraInput = data.data['outletInfra'];
          this.infraInput['outletType'] = String(data.data['outletInfra']['providerOrOutletType']);
          if(data.data['outletInfra']['outletType'] != "0") {
            this.infraSubmitBtn = "UPDATE";
          }
          this.isInfraActive = true;
        }
        
        if(data.data['BankInfomation'] != null) {
          this.outletBankingInput = data.data['BankInfomation'];
          this.branches.push({id: this.outletBankingInput['refBankId'], branch: this.outletBankingInput['branch']});
          this.outletBankingInput['refBankId'] = String(data.data['BankInfomation']['refBankId']);
          this.bankingSubmitBtn = "UPDATE";
        }
        
        if(data.data['MOU'] != null) {
          this.outletMouInput = data.data['MOU'][0];
          this.getMouAnxrById(this.outletMouInput['versionId']);
          this.isBankingActive = true;
        }
        
        return false;
      }
      if(data['error']['code'] == 204) {
          this._router.navigate(['/dashboard/providers/provider']);
        }
      }, Error => {
        console.log("something went gone wrong");
      })
  } 

  getProviderById(pId: number) {
    this._ProviderService.getProviderById(pId)
      .subscribe(data => {
        if(data['error']) {
          this._router.navigate(['/dashboard/providers/provider']);
        }
      })
  }

}
