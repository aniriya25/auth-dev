import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
show:boolean = false;
@ViewChild('myTable') table: any;
rows = [];
temp = [];
isLimits: number = 10;
records: any;
  constructor() { }

  ngOnInit() {
    this.rows = [
      { "company": "", "service": "", "comment": "" },
      ];
  }
 showto(){
   this.show=true;
}


}
