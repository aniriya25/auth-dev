import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { TransactionService } from './../../../services/transactions/transaction.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss'],
  providers: [TransactionService, MdSnackBar]
})
export class RejectComponent implements OnInit {

 abc: any;
  constructor(private route: ActivatedRoute,
  private _transaction: TransactionService, public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
  }

}
