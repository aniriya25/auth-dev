import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../auth/services/login/login.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { ProviderService } from './../../../services/providers/provider.service';
import { Router, RouterModule } from '@angular/router';
import { JwtHelper } from "angular2-jwt";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css'],
  providers:[LoginService, ProfileService, ProviderService]
})
export class DashboardMenuComponent implements OnInit {
  jwtHelper: JwtHelper = new JwtHelper();
  profile:any = {}; 
  isOpened:boolean = true;
  isOpenSide:string = 'side';
  providerLength: number = 0; 
  id:number;
  selected: number;
  provdier:boolean = false;
  outlets:boolean = false;
  transactions:boolean = false;
  username:any;
  password:any; 
 
  
  constructor(
    private loginService:LoginService,
    private router:Router,
    private userProfile: ProfileService,
    private providerService: ProviderService
    ) {
        // this.providerService.getAllProvider()
        //   .subscribe(data => {
        //     this.providerLength = data.data.length;
        //     console.log(this.providerLength);
        //   })
     }


    getUserProviderProfile() {
      this.providerService.getProviderProfileData() 
      .subscribe(data => {
        this.profile = data.data;
        console.log("Get Provider ID:");
        console.log(data.data);
      })
  }
   

  ngOnInit() {  
    this.getUserProfile();
    if(window.innerWidth < 768) {
      this.isOpened = false;
      this.isOpenSide = 'over';
      this.selectedIndexChange(0);
    }

    // this.checkuser();
}
    // checkuser(){

    // this.loginService.login();
    // if(this.type=="p"){
    //   this.router.navigate(['/dashboard/providers/provider/{id}']);
    // }
    // if(this.type == "O")
    // {
    //    this.router.navigate(['/dashboard/outlet/outlet/{id}']);
    // }
    // }

  showModule(){
     if(this.profile.refProfileLoginId == 2)
    {
      this.provdier = true;
      this.outlets = false;
      this.transactions = true;
     }
    if(this.profile.refProfileLoginId == 16) 
    {
      this.provdier = true;
      this.outlets = false;
      this.transactions = false;
    }

  }  
 
  getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;
        console.log(this.profile.id);
        this.showModule();
        
      })
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  add(page: string) {
   this.router.navigate([page]);
  }
  selectedIndexChange(val :number ){}
  selectId(id: number) {
    this.selected = id;
}    


}

