import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-transaction',
  templateUrl: './generate-transaction.component.html',
  styleUrls: ['./generate-transaction.component.css']
})
export class GenerateTransactionComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      codeType:[null, Validators.required],
      cardNumber:[null, Validators.required]
    })
  }
  onSubmit(){
    //console.log(this.form);
    console.log(this.form.value);
  }

  get codeType(){
    return this.form.get("codeType");
  }

  get cardNumber(){
    return this.form.get("cardNumber");
  }

}
