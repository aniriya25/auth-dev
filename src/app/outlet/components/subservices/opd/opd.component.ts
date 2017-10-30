import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css']
})
export class OpdComponent implements OnInit {
  myFormObj: object = {};
  @Output() outletOPDContactFx = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  submitFrm(obj: object) {
    this.outletOPDContactFx.emit(this.myFormObj);
  }
}
