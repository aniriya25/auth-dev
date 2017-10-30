import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-providerservices',
  templateUrl: './providerservices.component.html',
  styleUrls: ['./providerservices.component.css']
})
export class ProviderservicesComponent implements OnInit {
  
    @Input() services: any;
    @Input() isServiceFieldset: boolean;
    @Input() isServiceFormOverlay: boolean;
    @Input() isServiceButton: boolean;
    @Output() servicesFx = new EventEmitter<object>();
    @Input() servicesProgress: boolean;

  constructor() { }

  ngOnInit() { }
  
  // update services
  updateService(val: any) {
    val['type'] = false;
    this.servicesFx.emit(val);
  }

  // edit form
  editFrm(bol: boolean){
    this.services['type'] = true;
    this.servicesFx.emit(this.services);
  }
}
