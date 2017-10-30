import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outlet-services',
  templateUrl: './outlet-services.component.html',
  styleUrls: ['./outlet-services.component.css']
})
export class OutletServicesComponent implements OnInit {
  @Input() isServicesOverlay: boolean;
  @Input() isServicesBtn: boolean;
  @Input() isServicesFieldset: boolean;
  @Input() ServiceInput = [];
  @Input() services = [];
  @Input() subServices = [];
  @Output() outletServiceFx = new EventEmitter<object>();


  constructor() { }

  ngOnInit() {
    this.services = [
      {id: 1, name: 'OPD', isChecked: true},
      {id: 2, name: 'Pharmacy', isChecked: false},
      {id: 3, name: 'Diagnostic', isChecked: true}
    ];

    for(var i = 0; i < this.services.length; i++) {
      if(this.services[i]['isChecked'] == true) {
        this.subServices.push(this.services[i]);
      }
    }

    this.formtypcasting();
  }

 

  updateService(eve) {
    this.ServiceInput['_type'] = 'submitFrm';
    this.outletServiceFx.emit(this.ServiceInput);

    if(eve['isChecked'] == true) {
      this.subServices.push(eve);
      console.log(this.subServices);
      this.formtypcasting();
    }
    if(eve['isChecked'] == false) {
      for(var i = 0; i < this.subServices.length; i++) {
        if(this.subServices[i]['id'] == eve['id']) {
          this.subServices.splice(i, 1);
          return false;
        }
      }
    }
  }

  formtypcasting() {
    for(var j = 0; j < this.subServices.length; j++) {
      console.log(this.subServices[j]);
      this.subServices[j]['name'+'ab'] = {};
      console.log(this.subServices[j]['name'+'ab']);
    }
  }

  editService() {
    this.ServiceInput['_type'] = 'editFrm';
    this.outletServiceFx.emit(this.ServiceInput);
  }

  subServiceFrm(user: any) {
    console.log(user);
  }
} 
