import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { MemberlistService } from './../../services/members/memberlist/memberlist.service';


@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css'],
  providers: [MemberlistService]
})
export class AddmemberComponent implements OnInit {
 user : Object = {}
  allRoles:any;
  managers: any;
  branches: any;
  departments: any;
  designations: any;
  isReadOnly:boolean = true;
  edited:boolean = true;

// constructor
  constructor(private _memberService: MemberlistService) {}

// init function
 ngOnInit() {
    this.getRoles();
    this.getBranches();
    this.getDepartments();
    this.getAllDesignation();
  }

// get role
  getRoles() {
    this._memberService.getAllRole()
      .subscribe(data => {
       this.allRoles = data.data;       
      })
  }

 //get role id
  getRoleId(roleId) {
    this._memberService.getManagers(roleId)
      .subscribe(data => {
        this.managers = data.data;
      })
  }

 // get all branches
  getBranches() {
    this._memberService.getAllBranches()
      .subscribe(data => {
        this.branches = data.data;
        console.log(data.data);
      })
  }

 // get all departments
  getDepartments() {
    this._memberService.getAllDepartments()
      .subscribe(data => {
        this.departments = data.data;
      })
  }

 // get all designation
  getAllDesignation() {
    this._memberService.getAllDesignation()
      .subscribe(data => {
       this.designations = data.data;
      })
  }

 // submit
  submitFrm(users: any) {
    console.log(users);
  }
  editFrm() {
      this.isReadOnly = !this.isReadOnly;
      this.edited = false; 
    }
}