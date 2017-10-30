import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  @Output() bankingFx = new EventEmitter<Object>();
  @Output() ifscDetails = new EventEmitter<any>();
  @Input() bankingUser: Object;
  @Input() branches = [];
  @Input() isBankingActiveForm: boolean;
  @Input() isBankFormOverlay: boolean;
  @Input() isBankingBtn: boolean;
  @Input() isBankingFieldset: boolean;
  @Input() bankingBtn: string;
  @Input() bankingProgress: boolean;
  @Input() cancelChequeImg:string;


  accountTypes = [
    {value: 'Current', name: 'Current Account'},
    {value: 'Saving', name: 'Saving Account'}
  ];

  //myFile: string;
  constructor() { }

  ngOnInit() {
   //this.myFile = 'assets/images/H3U_Logo_201x132.png';
  }

  getUserAcc(ifscCode: any) {
   this.ifscDetails.emit(ifscCode);
  }

  submitProviderBanking(banking: any) {
    // alert(banking['chequeUrl']);
    if(banking['chequeUrl'] == '' || banking['chequeUrl'] == undefined) {
      alert("select check url");
      return false;
    }
    banking['_type'] = false;
    this.bankingFx.emit(banking);
  }

  edtFrm(banking: any) {
    banking['_type'] = true;
    this.bankingFx.emit(banking);
  }

  imageUploaded(eve){
    let checktarget = eve.src;
    let checkUrl = checktarget.substring(checktarget.indexOf(",")+1);
    this.bankingUser['chequeUrl'] = checkUrl;
    this.cancelChequeImg = eve.src;
    console.log(eve.src);
  }

  

  removeImg() {
    this.cancelChequeImg = '';
    this.bankingUser['chequeUrl'] = this.cancelChequeImg;
  }
}
