import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../auth/services/login/login.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { ProviderService } from './../../../services/providers/provider.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css'],
  providers:[LoginService, ProfileService, ProviderService]
})
export class DashboardMenuComponent implements OnInit {
  profile:any = {}; 
  isOpened:boolean = true;
  isOpenSide:string = 'side';
  providerLength: number = 0; 
  id:number;
  selected: number;
  
  
  
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
    this.selectId(1) ;
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
 
  getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;
        //console.log(data.data);
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

