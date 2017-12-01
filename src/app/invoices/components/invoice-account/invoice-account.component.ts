import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import * as moment from 'moment';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { ProfileService } from './../../../services/profile/profile.service';

@Component({
  selector: 'app-invoice-account',
  templateUrl: './invoice-account.component.html',
  styleUrls: ['./invoice-account.component.scss'],
  providers: [MdSnackBar, InvoiceService,ProfileService]
})
export class InvoiceAccountComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @ViewChild('expandButton') el: ElementRef;
  rows = [];
  temp = [];
  user: any = {};
  status = [];
  model: any = {};
  profile:any = {}; 
  approved:boolean = true;
  username: boolean = false;


  constructor(public dialogRef: MdDialogRef<InvoiceAccountComponent>, @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar, private _route: Router, private _invoice: InvoiceService, private userProfile: ProfileService) { }

  ngOnInit() {
    this.getInvoiceData();
    this.getStatusData();
    this.getUserProfile();
  }

 getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;
       console.log(this.profile.firstname);    
      })
  }

  getInvoiceData() {
    this.rows = this.data[0]; 
    let el = this.el.nativeElement;
    setTimeout(function () {
      el.click();
    }, );
  }

  getStatusData() {
    this._invoice.getStatus()
      .subscribe(data => {
        this.status = data.data;
        console.log(data.data);
      });
  }

setValidAmountData(value,row){
this.rows[row.$$index]["validAmount"]=value;
}
setReamrk(value,row){
this.rows[row.$$index]["remak"]=value;
}

setStatus(value,row){
this.rows[row.$$index]["status"]=value;
}


    updateTrans(value) {
    debugger;
    this.model.validAmount = this.rows[value.$$index]["validAmount"];
    this.model.remarks = this.rows[value.$$index]["remak"];
    this.model.refStatusId = this.rows[value.$$index]["status"];
    //debugger;
     this._invoice.updateValidateAmount(this.model,this.rows[value.$$index]["refTransactionId"])
     .subscribe(
      res => {
        if (res && res.message) {
          this.approved = false;
          this.username = true;
          this.snackBar.open(res.message, null, { duration: 3000 });   
        }
        else if (res && res.error && res.error.message) {
          this.snackBar.open(res.error.message, null, { duration: 3000 });
        }
        else {
          this.snackBar.open("Something went wrong, Please try again", null, { duration: 3000 });
        }
      },
      err => this.snackBar.open(err, null, { duration: 3000 })

     );
  }


}