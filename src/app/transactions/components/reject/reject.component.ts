import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { MdSnackBar, MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss'],
  providers: [TransactionService, MdSnackBar]
})
export class RejectComponent implements OnInit {
 abc: any;
 model: any = {};
 user: any = {};
 

  constructor(private route: ActivatedRoute, private _transaction: TransactionService, public snackBar: MdSnackBar,
  public dialogRef: MdDialogRef<RejectComponent>,@Inject(MD_DIALOG_DATA) public data: any, private _route: Router,
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
  }
   
    rejectTransaction() {     
      this.model.bookingRequestId = this.data.cardNumber;
      this.model.remark = this.user.remark;
      this._transaction.rejectTransaction(this.model)
      .subscribe(data => {
        //alert(data.message);
        if(data.message) {
          this.snackBar.open("Request cancelled successfully","",{duration:3000});
           setTimeout((_route: Router) => {
           this.dialogRef.close();             
           this._route.navigate(['dashboard/home']);
           }, 3100);
        }       
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });
     
     } 
}
