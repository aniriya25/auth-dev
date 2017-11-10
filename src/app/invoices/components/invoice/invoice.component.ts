import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
show:boolean = false;
  constructor() { }

  ngOnInit() {
  }
showto(){
  this.show=true;
}
}
