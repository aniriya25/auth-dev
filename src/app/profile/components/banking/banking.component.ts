import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css'],
  providers: [ProfileService, MdSnackBar]
})
export class BankingComponent implements OnInit {
    user : Object = {}
    accountTypes:any;
    isReadOnly:boolean = true;
    edited:boolean = true;
    chequeUrl:any;

    constructor(
      private _profile: ProfileService,
      public snackBar: MdSnackBar
      
    ) { }

    ngOnInit() {
      this.accountTypes = [
        {type: 'Saving', value: 'Saving Account'},
        {type: 'Current', value: 'Current Account'}        
      ]
      //this.user = {"accountType" : "Current", id: 1}

      // get banking fx
      this.getBankingData();

      // get account type
     // this.getAccount();
    }

    // get banking data
    getBankingData() {
      this._profile.getBanking()
      .subscribe(data => {
        //console.log(data.data[0]);
        this.user = data.data[0];
        this.user['type'] = this.user['type'];
        // console.log(data.data[0]);
        //this.user['id'] = ''+this.user['type']+'';
        //console.log(this.user['ACCOUNTTYPEID']);
        
      });
    }

    // get account list
    getAccount() {
      this._profile.getAccountType()
        .subscribe(data => {
          //this.accountTypes = ''+this.user['type']+'';
          this.user = data.data; 
          console.log(data.data);
        })
    }

    //submit form
    submitFrm(users: any) {
      users.type = users['id'];      
      this._profile.updateBanking(users)
      .subscribe(data => {
       console.log(data.data);
       if(data.message) {
          this.snackBar.open("Updated successfully","",{duration:5000});
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });
    }
  
     editFrm() {
      this.isReadOnly = !this.isReadOnly;
      this.edited = false; 
    }
}