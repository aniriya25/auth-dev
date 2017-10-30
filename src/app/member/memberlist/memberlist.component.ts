import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MemberlistService } from './../../services/members/memberlist/memberlist.service';
import { ProfileService } from './../../services/profile/profile.service';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css'],
  providers: [MemberlistService, ProfileService]
})
export class MemberlistComponent implements OnInit {
  @ViewChild('myTable') table: any;
  members = [];
  temp = [];
  currentUser = [];
  breadCrum = '';
  myObj:any = [];
  position:string = 'above';


// search member
  updateFilter(event){
    const val = event.target.value.toLowerCase();
   // filter our data
    const temp = this.temp.filter(function(d) {
      return (d.name.toLowerCase().indexOf(val) !== -1 || !val) || (d.manager.toLowerCase().indexOf(val) !== -1 || !val);
    });
    //update data
    this.members = temp;
    console.log(temp);
  }
  
  constructor(
    private _profile_memberlist: MemberlistService,
    private _profile: ProfileService,
    public dialog: MdDialog
  ) {}

  ngOnInit() {
    // get all member list
    this.memberList();

    // get logined user data
    this.loginedUser();

  }


  // get level to create breadcrumb
  getLevel(user: any) {
    if(user.column.name == 'chkbox') {
      return false;
    }
    this._profile_memberlist.getMemberList(user.row.id)
      .subscribe(data => {
          if(data.error) {
            this.members = [];
            this.temp = [];
            return false;
          } else if(data.data) {
            this.members = data.data;
            this.temp = this.members;
            return false;
          }
      })
    this.myObj.push({"name": user.row.name});
  }


// remove level from breadcrumb
  removeObj(rmObj, last) {
   if(this.myObj.length == 1 || last == true) {
     return false;
   }
   //console.log(rmObj.id);
  if(rmObj.name == this.myObj[0].name) {
    this._profile_memberlist.getMemberList(''+rmObj.id+'')
      .subscribe( data => {
        this.members = data.data;
      });
      this.myObj.splice(1);
     return false;
  }
   var _index = this.myObj.indexOf(rmObj);
    this.myObj.splice(_index);
  }  

// fetch all memberlist Data
  memberList() {
    this._profile_memberlist.getMemberList('me')
      .subscribe(data => {
        this.members = data.data;
        this.temp = this.members;
      })
  }

  // get logined user 
  loginedUser() {
    this._profile.getPersonalInfo()
      .subscribe(data => {
        this.currentUser = data.data;
        this.myObj.push({name: this.currentUser[0].firstName +" " +this.currentUser[0].lastName, id: 'me'});
      })
  }

  //checkbox
  selected = [];
  onSelect({selected}) {
    console.log(this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  // delete records
  delLevel = [];
  deleteAll() {
    this.dialog.open(DialogOverviewExampleDialog);
    // console.log(this.selected.length);
    // if(this.selected.length > 0) {
    //   for(var i = 0; i < this.selected.length; i++) {
    //     this._profile_memberlist.delMember({userId: this.selected[i].id});
    //   }
    // } else {
    //   console.log("sorry");
    // }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<p>sdfjlksdf</p>',
})
export class DialogOverviewExampleDialog {}