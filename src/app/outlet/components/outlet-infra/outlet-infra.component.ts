import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outlet-infra',
  templateUrl: './outlet-infra.component.html',
  styleUrls: ['./outlet-infra.component.css']
})
export class OutletInfraComponent implements OnInit {
   @Output() outletInfraFx = new EventEmitter<Object>();
   @Input() isInfraOverlay: boolean;
   @Input() isInfraFieldset: boolean;
   @Input() isInfraBtn: boolean;

   infraInput: Object = {};

  constructor() { }

  ngOnInit() {
  }

  outletInfraFrm() {
    this.infraInput['_type'] = 'submitFrm';
    this.outletInfraFx.emit(this.infraInput);
  }

  edit() {
    this.infraInput['_type'] = 'editFrm';
     this.outletInfraFx.emit(this.infraInput);
  }

}
