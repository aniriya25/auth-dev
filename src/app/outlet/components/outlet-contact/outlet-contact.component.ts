import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';

@Component({
  selector: 'app-outlet-contact',
  templateUrl: './outlet-contact.component.html',
  styleUrls: ['./outlet-contact.component.css']
})
export class OutletContactComponent implements OnInit {
tabOne: ISlimScrollOptions;
@Output() outletContactFx = new EventEmitter<Object>();
@Input() isContactFormOverlay: boolean;
@Input() isContactFieldset: boolean;
@Input() isOutletContactBtn: boolean;

outContactInput: Object = {};

  constructor() { }

  ngOnInit() {
    this.tabOne = {
      position: 'right',
      barBackground: '#000000',
      gridBackground: 'blue',
      gridWidth: '0',
      barWidth: '6',
      barOpacity: '0.5'
      }
  }

  outletContactFrm() {
    this.outContactInput['_type'] = 'submitFrm';
    this.outletContactFx.emit(this.outContactInput);
  }

  edit() {
    this.outContactInput['_type'] = 'editFrm';
    this.outletContactFx.emit(this.outContactInput);
  }

  outletOPDContactFx(eve) {
    console.log(eve);
  }
}
