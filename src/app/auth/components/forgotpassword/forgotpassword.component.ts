import { Component, OnInit } from '@angular/core';
import { ForgotpasswordService } from './../../../services/login/forgotpassword/forgotpassword.service';
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers: [ForgotpasswordService, MdSnackBar]
})
export class ForgotpasswordComponent implements OnInit {
  forgotform : any = {};
  emailNotExist = '';
  submitProgress = false;
  constructor(private forgotpasswd: ForgotpasswordService, public snackBar: MdSnackBar) {}

  ngOnInit() {
  }

  //forgotpassword
  onSubmit() {
    this.submitProgress = true;
    this.forgotpasswd.forgotPassword(this.forgotform.email)
      .subscribe(data => {
        console.log(data);
        if(data.data) {
          this.snackBar.open(data.data.message,"",{duration:5000});
          this.submitProgress = false;
        } else {
         this.snackBar.open("Somthing went wrong!","",{duration:5000});
         this.submitProgress = false;
        }
      })
  }

}
