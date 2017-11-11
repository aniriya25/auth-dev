import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-generate-transaction',
  templateUrl: './generate-transaction.component.html',
  styleUrls: ['./generate-transaction.component.css'],
  providers: [MdSnackBar]
})
export class GenerateTransactionComponent implements OnInit {
  user:any = [];
  public form: FormGroup;
  constructor(private fb:FormBuilder,
  private _route: Router,
  public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
 
  }
  onSubmit(){
     
  }
  getTransaction(){    
     if(this.user.cardNo === "" || this.user.cardNo === undefined)
     {
        this.snackBar.open("Please enter Card No./ Cupon No.!","",{duration:5000});

     }else{
     this._route.navigate(['dashboard/transactions/transaction'],{queryParams:{page:this.user.cardNo}});
  }
  }

}
