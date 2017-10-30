import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  providers: [ProfileService]
})
export class CommunicationComponent implements OnInit {
  user:Object = {};
  selectType:any;
  isReadOnly:boolean = true;
  edited:boolean = true;


  constructor(
    private _communication: ProfileService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    // get communication 
    this.getCommunicationData();

    // get communication type
    this.getCommunicationType();
  }

  // get communication data
  getCommunicationData() {
    this._communication.getCommunication()
      .subscribe(data => {
        this.user = data.data;
        this.user['refContactTypeId'] = String(this.user['refContactTypeId']);
        console.log(data.data);
      });
  }

 // get communication type
  getCommunicationType() {
    this._communication.getCommunicationType()
      .subscribe(data => {
        this.selectType = data.data;
        //console.log(data.data);
      })
  }

  // submit form
  submitFrm(updateCommunication: any) {
    this._communication.updateCommunication(updateCommunication)
      .subscribe(data => {
        if(data.data.message) {
         // console.log(data.data.message);
          this.snackBar.open(data.data.message,"",{duration:5000});
        } else {
          this.snackBar.open("Somthing went wrong!","",{duration:5000});
        }
      })
  }
 
  // edit fields
  editFrm() {
     this.isReadOnly = !this.isReadOnly;
     this.edited = false; 
   }

 
}


