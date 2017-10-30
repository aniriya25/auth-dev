import { Component, OnInit} from '@angular/core';
import { MemberlistService } from './../../../services/members/memberlist/memberlist.service';
import { ProfileService } from './../../../services/profile/profile.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css'],
  providers: [MemberlistService, ProfileService]
})
export class UpdateprofileComponent implements OnInit {
  totalMember:number;
  _profileToggle:boolean = true;
  _profileClick:boolean = true;
  userProfile:any = {};

  constructor(
    private _member: MemberlistService,
    private _userProfile: ProfileService
  ) {
    // this._member.getMemberList('me').subscribe(data => {
    //   this.totalMember = data.data.length;
    // });
  }

  ngOnInit() {
   //this.getUserProfile();
  }

  getUserProfile() {
    this._userProfile.getPersonalInfo()
      .subscribe(data => {
        //this.userProfile = data.data[0];
      })
  }

  hideShow() {
    this._profileToggle = !this._profileToggle;
    this._profileClick = this._profileClick; 
  }
}
