import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { JwtHelper } from "angular2-jwt";
import { ChangepasswordService } from "./../../../services/changepassword/changepassword.service";
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers:[ChangepasswordService]
})
export class ChangepasswordComponent implements OnInit {
  jwtHelper: JwtHelper = new JwtHelper();
  changePasswd : any = {};
  token: string;
  userid: string;
  notMatch = false;
  updating = false;
  constructor(
    private snackbar:MdSnackBar,
    private route:ActivatedRoute,
    private router:Router,
    private changepasswordService:ChangepasswordService
    ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    try{
      var jwtToken = this.jwtHelper.decodeToken(this.token);
      if(!jwtToken.userId) this.router.navigate(['/login']);
      this.userid = jwtToken.userId; 
    }catch(e){
      this.router.navigate(["/login"]);
    }
  }

  onSubmit() {
    this.updating = true;
     console.log(this.changePasswd);
     let requestData : any = {};
     requestData.oldpassword = this.changePasswd.oldPassword;
     requestData.newPassword = this.changePasswd.newPassword;
     this.changepasswordService.updateChangePassword(requestData,this.token).subscribe(
       data=>{
         this.updating = false;
         console.log(data);
         if(data.data && data.data.code==401)
          this.snackbar.open(data.data.message); 
        }
       );
  }
}

