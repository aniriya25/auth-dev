import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../services/profile/profile.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profile:any = {}; 
  TransactionSearch:boolean = false;
  Offers:boolean = false;

  constructor( private userProfile: ProfileService) { }

  ngOnInit() {
  this.getUserProfile();
  }
  getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;
        if(this.profile.refProfileLoginId == 2)
        {
          this.TransactionSearch = true;
          this.Offers = true;
        }
        
      })
  }

}
