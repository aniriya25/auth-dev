import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outlet-banking',
  templateUrl: './outlet-banking.component.html',
  styleUrls: ['./outlet-banking.component.css']
})
export class OutletBankingComponent implements OnInit {
  @Output() outletBankingFx = new EventEmitter<Object>();
   @Output() ifscFx = new EventEmitter<any>();
   @Input() isOutletBankingOverlay: boolean;
   @Input() isOutletBankingFieldset: boolean;
   @Input() isOutletBankingBtn: boolean;
  @Input() bankingSubmitBtn: string;
  @Input() outletBankingInput: object = {};
  accountTypes = [];
  @Input() branches = [];
  
  constructor() { }

  ngOnInit() {
    this.accountTypes = [
      {name: 'Saving'},
      {name: 'Current'}
    ]
  }

  submitFrm(bankObj: any) {
    bankObj['_type'] = 'submitFrm';
    this.outletBankingFx.emit(bankObj);
  }

  edtFrm() {
    this.outletBankingFx.emit({_type: 'editFrm'});
  }
  
  getIfscDetails(ifscCode: any) {
    this.ifscFx.emit(ifscCode);
  }

  imageUploaded(eve) {
    let checktarget = eve.src;
    let checkUrl = checktarget.substring(checktarget.indexOf(",")+1);
    this.outletBankingInput['chequeUrl'] = checkUrl;
  }

}
