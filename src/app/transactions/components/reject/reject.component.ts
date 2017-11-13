import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { MdSnackBar } from '@angular/material';

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

  constructor(private route: ActivatedRoute, private _transaction: TransactionService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
  }
   
    rejectTransaction() {
      //debugger; 
      this.model.cardNumber = this.user.cardNumber;
      this.model.remark = this.user.remark;
      this._transaction.rejectTransaction(this.model)
      .subscribe(data => {    
         if(data.message) {          
          }else if(data && data.error && data.error.message){
            this.snackBar.open("Somthing went wrong!, Please Check OTP Code","",{duration:5000});
          }        
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      }); 
     } 

}
