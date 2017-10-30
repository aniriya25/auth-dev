import { Component, OnInit, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';

@Component({
  selector: 'app-providercontact',
  templateUrl: './providercontact.component.html',
  styleUrls: ['./providercontact.component.css']
})
export class ProvidercontactComponent implements OnInit {
  tabOne: ISlimScrollOptions;
  tabTwo: ISlimScrollOptions;
  isSubmitBtn:boolean;
  
  @Input() isSignatoryFieldset: boolean;
  @Input() isContactFieldset: boolean;
  @Input() isSignatoryButton: boolean;
  @Input() isContactButton: boolean;
  @Input() isSginatoryFormOverlay: boolean;
  @Input() isContactFormOverlay: boolean;
  @Input() contactInput: any;
  @Input() signatoryInput: any;
  @Input() tabIndx: number;
  @Output() signatoryNcontactFx = new EventEmitter<object>();
  @Input() signatoryProgress: boolean;
  @Input() contactProgress: boolean;
  @Input() signatoryBtnText: string;
  @Input() contactBtnText: string;

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
      this.tabTwo = {
         position: 'right',
      barBackground: '#000000',
      gridBackground: 'blue',
      gridWidth: '0',
      barWidth: '6',
      barOpacity: '0.5'
      }
  }
  
  // Signatory form submission
  SubmitSignatoryFrm(user: any) {
    user['type'] = "signatory";
    this.signatoryNcontactFx.emit(user);
  }

  // Contact form submissino
  submitContactFrm(user: any) {
    user['type'] = "contact";
    this.signatoryNcontactFx.emit(user);
  }
  
  // edit form
  editFrm(_type: string) {
    if(_type == "signatory") {
      this.signatoryInput['type'] = "notSignatory";
      this.signatoryNcontactFx.emit(this.signatoryInput);
      return false;
    }
    if(_type == "contact") {
      this.contactInput['type'] = "notContact";
      this.signatoryNcontactFx.emit(this.contactInput);
      return false;
    }
  }

  // add record
  addRec(typeStr: string) {
    if(typeStr == 'signatory') {
      this.signatoryInput.push({name: '', designation: '', email: '', mobile: '', landline: ''});
    } 
    if(typeStr == 'contact') {
      this.contactInput.push({name: '', designation: '', email: '', mobile: '', landline: ''});
    }
  }
}
