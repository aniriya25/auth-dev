import { Component, OnInit, ViewChild} from '@angular/core';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';
import { InvoiceValidateComponent } from '../invoice-validate/invoice-validate.component';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
  providers: [InvoiceService, MdSnackBar, ProfileService]
})
export class InvoicesListComponent implements OnInit {
  @ViewChild('myTable') table: any;
   rows = [];
   temp = [];
   isLimits: number = 10;
   records: any;
   allInvoice =[];
   allrows = [];
   alldatavalue: any = [];
   profile:any = {}; 

      
  constructor( private _invoice: InvoiceService,
    public snackBar: MdSnackBar,
    private userProfile: ProfileService,
    private _route: Router, public dialog: MdDialog) { }

  ngOnInit() { 
  
    // this.showInvoiceList();
    this.getInvoiceData();
  }

  getInvoiceData() {    
    this._invoice.getInvoiceDetails()
      .subscribe(data => {         
        this.allInvoice = data.data; 
        this.rows = this.allInvoice;
        console.log(this.rows);   
      })
  }
  
  openreview(row) {
   // debugger;
     const dialogRef = this.dialog.open(InvoiceSummaryComponent,{data:[
          this.rows = this.allInvoice[row.$$index]["Invoice"]
       ], disableClose: true});
        this.getInvoiceData();      
}

// showInvoiceList(){
//   if(this.profile.id == 2)
//   {
//     this.getInvoiceData();
//    }
//    if(this.profile.id == 16){
//     this.getInvoiceInproccessData();
//    }

// }

// getUserProfile() {
//   this.userProfile.getPersonalInfo() 
//     .subscribe(data => {
//       this.profile = data.data;
//       console.log(this.profile.id);
//       this.showInvoiceList();
      
//     })
// }


}