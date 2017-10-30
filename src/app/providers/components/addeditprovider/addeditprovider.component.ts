import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProviderService } from './../../../services/providers/provider.service';
import {MdSnackBar} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-addeditprovider',
  templateUrl: './addeditprovider.component.html',
  styleUrls: ['./addeditprovider.component.css'],
  providers: [ProviderService]
})
export class AddeditproviderComponent implements OnInit {
  public title: string;  
  
  isBasicActive: boolean;
  isSignatoryActive: boolean;
  isContactActive: boolean;
  isServiceActive: boolean;
  isMousActive: boolean;
  isBankingActive: boolean;
  profilePix: string;

  isBasicInfoFieldset: boolean;
  isButton: boolean;
  isBasicButton: boolean;
  isBasicInfoFormoOverlay: boolean;
  isBasicInfoActiveForm: boolean;
  basicInfoInput: Object = {};
  updateBasicInfo: object = {};
  providerTypes = [];
  latitude: number;
  longitude: number;
  basicInfoProgress: boolean;
  basicInfoBtnText: string;

  contactInput = [];
  signatoryInput = [];
  isSignatoryButton: boolean;
  isContactButton: boolean;
  isContactFormOverlay: boolean;
  isSignatoryFieldset: boolean;
  isContactFieldset: boolean;
  isSginatoryFormOverlay: boolean;
  tabIndx: number;
  signatoryProgress: boolean;
  contactProgress: boolean;
  signatoryBtnText: string;
  contactBtnText: String;

  services = [];
  selectedService: any = [];
  isServiceFieldset: boolean;
  isServiceFormOverlay: boolean;
  isServiceButton: boolean;
  updateServices: object = {};
  servicesProgress: boolean;

  bankingUser: object = {};
  branches = [];
  isBankingActiveForm: boolean;
  isBankFormOverlay: boolean;
  isBankingBtn: boolean;
  isBankingFieldset: boolean;
  bankingBtn: String;
  bankingProgress: boolean;
  cancelChequeImg: string;

  mouTypes = [];
  annexures = [];
  mouVersions = [];
  mouInput:object = {};
  isMouFieldset: boolean;
  isMouBtn: boolean;
  versionNo: boolean;
  isMouOverlay: boolean;
  pdfversion: number;
  completeSec: number;
  partialSec: number;

  pid: number;

  constructor(
    private _providerDetails: ProviderService,
    private activatedRoute: ActivatedRoute,
    private cdf: ChangeDetectorRef,
    private _router: Router,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.pid = 1;
    this.activatedRoute.params.subscribe((Params: Params) =>{
      if(Params['id'] != undefined) {
        this.isBasicInfoFieldset = true;
        this.isBasicButton = false;
        this.isBasicInfoActiveForm = false;

        this.isSignatoryFieldset = true;
        this.isContactFieldset = true;
        this.isSignatoryButton = false;
        this.isContactButton = false;

        this.isServiceFieldset = true;
        this.isServiceFormOverlay = false;
        this.isServiceButton = false;
      
        this.getProviderById(Params['id']);
        this.basicInfoProgress = true;
        this.servicesProgress = true;
        this.signatoryProgress = true;
        this.contactProgress = true;

        this.isBankingFieldset = true;
        this.bankingProgress = true;

        this.isMouFieldset = true;
        this.versionNo = false;
        this.isMouOverlay = false;
        return false;
      }

      this.title = "ADD";

      this.isBasicInfoFieldset = false;
      this.isBasicButton = true;
      this.isBasicInfoActiveForm = true;

      this.isSignatoryFieldset = false;
      this.isContactFieldset = false;
      this.isSignatoryButton = true;
      this.isContactButton = true;
      this.isSginatoryFormOverlay = true;
      this.isContactFormOverlay = true;

      this.isServiceFieldset = false;
      this.isServiceFormOverlay = true;
      this.isServiceButton = true;

      this.isBankFormOverlay = true;
      this.isBankingBtn = true;

      this.contactInput = [{name: '', designation: '', email: '', mobile: '', landline: ''}]
      this.signatoryInput = [{name: '', designation: '', email: '', mobile: '', landline: ''}]
      this.bankingUser = {};

      this.isMouBtn = true;
      this.versionNo = true;
      this.isMouOverlay = true;

      this.signatoryBtnText = 'SUBMIT';
      this.contactBtnText = 'SUBMIT';
      this.basicInfoBtnText = 'SUBMIT';
      this.bankingBtn = 'SUBMIT';

      
      this.basicInfoInput = {};
      this.latitude = 0;
      this.longitude = 0;
    })

    this.getServicesList();
    this.getAllProvider(); 
    this.mouType();
    this.mouAnnexures();
    this.getMouVersions();
  }

  // basic information 
  basicInfoFx(eve) {
    console.log(eve);
    this.activatedRoute.params.subscribe((Params: Params) =>{
      this.updateBasicInfo['name'] = eve['name'];
      this.updateBasicInfo['pincode'] = eve['pincode'];
      this.updateBasicInfo['providerTypeId'] = eve['providerTypeId'];
      this.updateBasicInfo['regdAddress'] = eve['regdAddress'];
      this.updateBasicInfo['regdName'] = eve['regdName'];
      this.updateBasicInfo['totalOutlets'] = eve['totalOutlets'];
      this.updateBasicInfo['webLink'] = eve['webLink'];
      this.updateBasicInfo['state'] = eve['state'];
      this.updateBasicInfo['city'] = eve['city'];
      this.updateBasicInfo['latitude'] = eve['latitude'];
      this.updateBasicInfo['longitude'] = eve['longitude']; 
      

      if(eve['isPix'] == true) {
        this.updateBasicInfo['logoLink'] = eve['logoLink']; 
      }

      if(Params['id'] != undefined) {
        if(eve.type == false) {
          this._providerDetails.updateProviderBasicInfo(this.updateBasicInfo, Params['id'])
          .subscribe(data => {
            this.snackBar.open("Updated successfully","",{duration:5000});
          }, Error => {
            this.snackBar.open("Something went wrong","",{duration:5000});
          })

          this.isBasicInfoFieldset = true;
          this.isBasicButton = false;
          this.isBasicInfoActiveForm = false;
        } else if(eve.type == true) {
          this.isBasicInfoFieldset = false;
          this.isBasicButton = true;
          this.isBasicInfoActiveForm = true;
        }
        return false;
      }

      console.log(this.updateBasicInfo);
      

      if(eve.type == false) {
        this._providerDetails.createProviderBasicInfo(eve)
        .subscribe(data => {
          this.basicInfoInput['id'] = data.data['id'];
          if(this.basicInfoInput['id'] != undefined) {
            this.isBasicInfoFormoOverlay = true;
          this.isBasicButton = false;
          this.isBasicInfoActiveForm = false;
          this.isSginatoryFormOverlay = false;
          this.isContactFormOverlay = false;
          this.isServiceFormOverlay = false;
          this.isBankFormOverlay = false;
          this.isMouOverlay = false;
          }
          this.isBasicActive = true;
           this.snackBar.open("Created successfully","",{duration:5000});
      }, Error => {
          this.isBasicInfoFormoOverlay = false;
        this.isBasicButton = true;
        this.isBasicInfoActiveForm = true;
        this.isSginatoryFormOverlay = true;
        this.isContactFormOverlay = true;
        this.isServiceFormOverlay = true;
        this.isBankFormOverlay = true;
        this.isMouOverlay = true;
           this.snackBar.open("Something went wrong!","",{duration:5000});
      });
        // this.isBasicInfoFormoOverlay = true;
        // this.isBasicButton = false;
        // this.isBasicInfoActiveForm = false;
        // this.isSginatoryFormOverlay = false;
        // this.isContactFormOverlay = false;
        // this.isServiceFormOverlay = false;
        // this.isBankFormOverlay = false;
        // this.isMouOverlay = false;
        return false;
      } else if(eve.type == true) {
        console.log("updated");
        this.isBasicInfoFormoOverlay = false;
        this.isBasicInfoActiveForm = true;
        this.isBasicButton = true;
        return false;
      }
    });
  }

// signatory N contact
  signatoryNcontactFx(eve) {
    this.activatedRoute.params.subscribe((Params: Params) => {
      if(Params['id'] != undefined && eve.type == "signatory") {
        this.isSignatoryFieldset = true;
          this.isSignatoryButton = false;
      }

       if(Params['id'] != undefined && eve.type == "contact") {
          this.isContactFieldset = true;
          this.isContactButton = false;
        }
      if(Params['id'] != undefined) {
        if(eve['id'] == undefined && eve.type == "signatory") {
          this._providerDetails.createSignatory(eve, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isSignatoryActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
               this.snackBar.open("Something went wrong","",{duration:5000});
            })
          return false;
        }

        if(eve['id'] == undefined && eve.type == "contact") {
          this._providerDetails.createContact(eve, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isContactActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
               this.snackBar.open("Something went wrong","",{duration:5000});
            })
          return false;
        }

        if(eve.type == "signatory" && eve['id'] != undefined) {
         this._providerDetails.updateSignatory(eve, Params['id'])
          .subscribe(data => {
            this.snackBar.open("Updated successfully","",{duration:5000});
          }, Error => {
            this.snackBar.open("Something went wrong","",{duration:5000});
          })
          this.isSignatoryFieldset = true;
          this.isSginatoryFormOverlay = false;
          this.isSignatoryButton = false;
          return false;
        } else if(eve.type == "notSignatory"){
          this.isSignatoryFieldset = false;
          this.isSignatoryButton = true;
          return false;
        } 

        if(eve.type == "contact" && eve['id'] != undefined) {
          this._providerDetails.updateContact(eve, Params['id'])
            .subscribe(data => {
              console.log(data.data);
              this.snackBar.open("Updated successfully","",{duration:5000});
            }, Error => {
              this.snackBar.open("Something went wrong","",{duration:5000});
            })
          this.isContactFieldset = true;
          this.isContactFormOverlay = false;
          this.isContactButton = false;
          return false;
        } else if(eve.type == "notContact"){
          this.isContactFieldset = false;
          this.isContactButton = true;
          return false;
        }
        return false;
      }

      
      if(eve.type == "signatory") {
        if(this.basicInfoInput['id'] != undefined) {
          console.log("id exist");
          console.log(eve);
          this._providerDetails.createSignatory(eve, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isSignatoryActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
               this.snackBar.open("Something went wrong","",{duration:5000});
            })
            this.isSginatoryFormOverlay = true;
            this.isSignatoryButton = false;
            this.isContactFormOverlay = false;
            this.tabIndx = 1;
          return false;
        }
        // this.isSginatoryFormOverlay = true;
        // this.isSignatoryButton = false;
        // this.isContactFormOverlay = false;
        // this.tabIndx = 1;
        return false;
      } else if(eve.type == "notSignatory") {
        this.isSginatoryFormOverlay = false;
        this.isSignatoryButton = true;
        return false;
      } 

      if(eve.type == "contact") {
        if(this.basicInfoInput['id'] != undefined) {
          console.log("id exist");
          console.log(eve);
          this._providerDetails.createContact(eve, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isContactActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
               this.snackBar.open("Something went wrong","",{duration:5000});
            })
            this.isContactFormOverlay = true;
            this.isContactButton = false;
            this.isServiceFormOverlay = false;
          return false;
        }
        // this.isContactFormOverlay = true;
        // this.isContactButton = false;
        // this.isServiceFormOverlay = false;
        return false;
      } else if(eve.type == "notContact"){
        this.isContactFormOverlay = false;
        this.isContactButton = true;
        return false;
      } 
    })
  }

  servicesFx(eve) {
    this.updateServices['refServiceCatgId'] = eve['id'];
    this.updateServices['remarks'] = eve['remarks'];
    this.updateServices['idChecked'] = eve['isChecked'];
    

    this.activatedRoute.params.subscribe((Params: Params) => {
        if(eve.type == true) {
          this.isServiceFieldset = false;
          this.isServiceButton = true;
          return false;
        } else if(eve.type == false) {
          if(Params['id'] != undefined) {
          this.updateServices['refProviderId'] = Params['id'];
          this._providerDetails.updateServices(this.updateServices)
            .subscribe(data => {
              this.snackBar.open("Updated successfully","",{duration:5000});
            }, Error => {
              this.snackBar.open("Something went wrong","",{duration:5000});
            })
          this.isServiceButton = true;
          return false;
        }

        if(this.basicInfoInput['id'] != undefined) {
          console.log("id exist");
          console.log(eve);
          this.updateServices['refProviderId'] =this.basicInfoInput['id'];
          this._providerDetails.createServices(this.updateServices, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isServiceActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
               this.snackBar.open("Something went wrong","",{duration:5000});
            })
           
          return false;
        }
      }
    })
  }

  bankingFx(eve) {
    console.log(eve);
   //if(eve._type == true && this.basicInfoInput['id']) {
        this.activatedRoute.params.subscribe((Params: Params) => {
          if(Params['id'] != undefined && eve._type == true) {
            this.isBankingFieldset = false;
            this.isBankingBtn = true;
          }
      })
    //}
    if(eve._type == true) {
        this.isBankFormOverlay = false;
        this.isBankingBtn = true;
        return false;
      } else if(eve._type == false) {
        this.activatedRoute.params.subscribe((Params: Params) => {
          if(Params['id'] != undefined) {
             
            if(eve['id'] != undefined && eve._type == false) {
              console.log("update");
               this._providerDetails.updateProviderBanking(eve, Params['id'], eve['id'])
              .subscribe(data => {
                console.log(data.data);
                this.snackBar.open("Updated successfully","",{duration:5000});
              }, Error => {
                this.snackBar.open("Something went wrong!","",{duration:5000});
              })
              return false;
            }
            if(eve['id'] == undefined && eve._type == false) {
              console.log("create with id");
              this._providerDetails.createProviderBanking(eve, this.basicInfoInput['id'])
                .subscribe(data => {
                  //this.isBankingActive = true;
                  this.snackBar.open("Created successfully","",{duration:5000});
                }, Error => {
                  this.snackBar.open("Something went wrong!","",{duration:5000});
                })
                 this.isBankingBtn = false;
                this.isBankFormOverlay = true;
              return false;
            }
            return false;
          }

          this._providerDetails.createProviderBanking(eve, this.basicInfoInput['id'])
            .subscribe(data => {
              this.isBankingActive = true;
              this.snackBar.open("Created successfully","",{duration:5000});
            }, Error => {
              this.snackBar.open("Something went wrong!","",{duration:5000});
            })
          console.log("create");
        })
        this.isBankingBtn = false;
        this.isBankFormOverlay = true;
        //this.isBankingFieldset = true;
        return false;
      }
  }

  ifscDetails(eve){
    this._providerDetails.getIfscDetail(eve)
      .subscribe(data => {
        if(!data.data) {
          this.snackBar.open("No record found","",{duration:3000});
          return false;
        }
        console.log(data.data);
        this.branches = data.data;
        this.bankingUser['refBankId'] = data.data[0].id;
        this.bankingUser['name'] = data.data[0].name;
        this.bankingUser['address'] = data.data[0].address;
        this.bankingUser['city'] = data.data[0].city;
        this.bankingUser['state'] = data.data[0].state;
      }, Error => {
        this.snackBar.open("Something went wrong","",{duration:5000});
      });
  }

  mouType() {
    this._providerDetails.getMouTypeMaster() 
      .subscribe(data => {
        this.mouTypes = data.data;
        console.log("mous type below");
        console.log(data.data);
      }, Error => {
        this.snackBar.open("Something went wrong","",{duration:5000});
      })
  }

  mouAnnexures() {
    this._providerDetails.getMouAnnexures()
      .subscribe(data => {
        this.annexures = data.data;
        console.log("annexures below");
        console.log(data.data);
      }, Error => {
        this.snackBar.open("Something went wrong","",{duration:5000});
      })
  }

  getMouVersions() {
    //this.mouVersions = [];
    this.activatedRoute.params.subscribe((Params: Params) => {
      if(Params['id'] != undefined) {
        this._providerDetails.getMouVersionList(Params['id'])
          .subscribe(data => {
            this.mouVersions = data.data;
          }, Error => {
              console.log("Something went wrong!");
          })
      }
    })
  }

  getMouAnxrById(id) {
    this.activatedRoute.params.subscribe((Params: Params) => {
      if(Params['id'] != undefined) {
        this._providerDetails.getMouAnnxureById(Params['id'], id)
          .subscribe(data => {
            this.annexures = [];
            this.annexures = data.data[0]['annexures'];
            let startDate = new Date(data.data[0]['validFromDate']);
            let endDate = new Date(data.data[0]['validToDate']);
            this.mouInput['validFromDate'] = startDate;
            this.mouInput['validToDate'] = endDate;
            this.mouInput['compDocUrl'] = data.data[0]['compDocUrl'];
            //this.mouInput['mouTypeId'] = String(data.data[0]['mouTypeId']);
            console.log("=====================++++++");
            console.log(data.data);
             return false;
          });
         
      }
    })
  }

  mouFx(eve) {
    
    if(eve._type == true) {
      console.log("edited");
      this.isMouFieldset = false;
      this.isMouBtn = true;
      return false;
    }
    console.log(eve);
    if(eve._type == false) {
      this.activatedRoute.params.subscribe((Params: Params) => {
           if(Params['id'] != undefined) {
              if(this.basicInfoInput['id'] != undefined && eve._type == false) {
                this._providerDetails.createProviderMou(eve, this.basicInfoInput['id'])
                  .subscribe(data => {
                      console.log(data.data);
                      this.snackBar.open("Created successfully","",{duration:5000});
                  }, Error => {
                      this.snackBar.open("Something went wrong","",{duration:5000});
                  })
                return false;
              }
             console.log("updated");
             this._providerDetails.updateProviderMou(eve);
             return false;
           }

           console.log("submited");
           this._providerDetails.createProviderMou(eve, this.basicInfoInput['id'])
           .subscribe(data => {
              console.log(data.data);
              this.snackBar.open("Created successfully","",{duration:5000});
           }, Error => {
              this.snackBar.open("Something went wrong","",{duration:5000});
           })
          this._router.navigate(['/dashboard/providers']);
      });
      this.isMouFieldset = true;
      this.isMouBtn = false;
      return false;
    }
  }


  getProviderById(id: number) {
    this._providerDetails.getProviderById(id)
      .subscribe(data => {
        this.title = data.data.name;
        let serviceCatData = data.data.ServicesCategories;
        
        if(data.data != '' || data.data != null || data.data != null) {
          this.isBasicActive = true;
          this.basicInfoInput = data.data;
          this.basicInfoInput['providerTypeId'] = String(data.data['providerTypeId']);
          //alert(this.basicInfoInput['providerTypeId']);
          this.profilePix = this.basicInfoInput['logoLink'];
          this.latitude = Number(data.data.latitude);
          this.longitude = Number(data.data.longitude);
          this.basicInfoInput['latlon'] = data.data.latitude+', '+data.data.longitude;
          this.basicInfoBtnText = 'UPDATE';
        }

        if(data.data.BankInfomation != null) {
          this.bankingUser = data.data.BankInfomation;
          this.cancelChequeImg = this.bankingUser['chequeUrl'];
          this.branches.push({id: this.bankingUser['refBankId'], branch: this.bankingUser['branch']});
          this.bankingUser = data.data.BankInfomation;
          this.bankingBtn = 'UPDATE';
          this.isBankingActive = true;
        } else {
          this.bankingUser = {};
          this.bankingBtn = 'SUBMIT';
        }

        if(data.data.MOU != null) {
         //this.mouInput = data.data.MOU[0];
         console.log(data.data[0]);
          let startDate = new Date(data.data.MOU[0]['validFromDate']);
          let endDate = new Date(data.data.MOU[0]['validToDate']);
          this.mouInput['validFromDate'] = startDate;
          this.mouInput['validToDate'] = endDate;
          this.mouInput['compDocUrl'] = data.data.MOU[0]['compDocUrl'];
          this.mouInput['mouTypeId'] = String(data.data.MOU[0]['mouTypeId']);
         //alert(this.mouInput['mouTypeId']);
          this.mouInput['versionId'] = String(data.data.MOU[0]['id']);
          this.pdfversion = data.data.MOU[0]['versionId'];
          this.isMousActive = true;

          this.getMouAnxrById(this.mouInput['versionId']);

          switch(this.mouInput['mouTypeId']) {
            case '1':
              this.completeSec = 1;
              this.partialSec = 0;
              break;
            case '2':
              this.partialSec = 2;
              this.completeSec = 0;
              break;
          }
        }

        this.basicInfoProgress = false;
        this.servicesProgress = false;
        this.signatoryProgress = false;
        this.contactProgress = false;
        this.bankingProgress = false;
        

        if(data.data.SignatryPersons != null) {
          this.signatoryInput = data.data.SignatryPersons;
          this.isSignatoryActive = true;
          this.signatoryBtnText = 'UPDATE';
        }else {
          this.signatoryInput = [{name: '', designation: '', email: '', mobile: '', landline: ''}]
          this.signatoryBtnText = 'SUBMIT';
        }

        if(data.data.ContactPersons != null) {
          this.contactInput = data.data.ContactPersons;
          this.isContactActive = true;
          this.contactBtnText = 'UPDATE';
        } else {
          this.contactInput = [{name: '', designation: '', email: '', mobile: '', landline: ''}];
          this.contactBtnText = 'SUBMIT';
        }

          if(serviceCatData != null) {
            this.isServiceActive = true;
          }

        if(serviceCatData == null) return false;
         for(var i = 0; i < this.services.length; i++) {
          for(var j = 0; j < serviceCatData.length; j++) {
            let catChkId = serviceCatData[j].refServiceCatgId;
            let serviceChkId = Number(this.services[i].id);

            if(catChkId === serviceChkId) {
            let myBol= Boolean(true);
            this.services[serviceChkId - 1]['isChecked'] = myBol;
            }
          }
         }

      }, Error => {
        this.snackBar.open("Something went wrong","",{duration:5000});
      })
  }

  getServicesList() {
    this._providerDetails.getAllProviderServices() 
      .subscribe(data => {
        this.services = data.data;
      })

    
  }

  // get provider type list 
  getAllProvider() {
    this._providerDetails.getProviderTypeList()
      .subscribe(data => {
        this.providerTypes = data.data;
      })
  }
}


