import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from './../../../services/invoices/invoice.service';

@Component({
  selector: 'app-invoice-validate',
  templateUrl: './invoice-validate.component.html',
  styleUrls: ['./invoice-validate.component.scss'],
  providers: [MdSnackBar, InvoiceService]
})
export class InvoiceValidateComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @ViewChild('expandButton') el: ElementRef;
  rows = [];
  temp = [];
  user: any = {};
  model: any = {};
 action =[{value:"1",viewValue:"Pending"},{value:"3",viewValue:"Approved"}];
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }

  constructor(public dialogRef: MdDialogRef<InvoiceValidateComponent>, @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar, private _route: Router, private _invoice: InvoiceService) {

  }

  ngOnInit() {
    this.getInvoiceData();
    this.getStatusData();
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
        this.user = data.data;
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
