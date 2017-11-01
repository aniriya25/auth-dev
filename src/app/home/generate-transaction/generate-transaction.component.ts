import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-generate-transaction',
  templateUrl: './generate-transaction.component.html',
  styleUrls: ['./generate-transaction.component.css']
})
export class GenerateTransactionComponent implements OnInit {
  user:any = [];
  public form: FormGroup;
  constructor(private fb:FormBuilder,
  private _route: Router
  ) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   codeType:[null, Validators.required],
    //   cardNumber:[null, Validators.required]
    // })
  }
  onSubmit(){
    //console.log(this.form);
    console.log(this.form.value);
  }

  get codeType(){
    return this.form.get("codeType");
  }

  get cardNumber(){
    return this.form.get("crdNo");
  }

  getTransaction(){
     this._route.navigate(['dashboard/transactions/transaction'],{queryParams:{page:this.user.cardNo}});
  }

}
