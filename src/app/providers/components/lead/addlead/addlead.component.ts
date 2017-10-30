import { Component, OnInit } from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-addlead',
  templateUrl: './addlead.component.html',
  styleUrls: ['./addlead.component.css']
})
export class AddleadComponent implements OnInit {
   user: any = {};
   states = [];
   temp = [];
  demoProgress: boolean = true;
  constructor(public snackBar: MdSnackBar) { 
    
  }

  
  ngOnInit() {
    this.getStates();

  }

  subFrms(user: any) {
    console.log(user);
  }

  getStates() {
    this.states = [
      {id: 1, name: 'Alabama'},
      {id: 2, name: 'Alaska'},
      {id: 3, name: 'Arizona'},
      {id: 4, name: 'Arkansas'},
      {id: 5, name: 'California'},
      {id: 6, name: 'Colorado'},
      {id: 7, name: 'Connecticut'},
      {id: 8, name: 'Delaware'},
      {id: 9, name: 'Florida'},
      {id: 10, name: 'Georgia'},
      {id: 11, name: 'Hawaii'},
      {id: 12, name: 'Idaho'},
      {id: 13, name: 'Illinois'},
      {id: 14, name: 'Indiana'}
    ];
    this.temp = this.states;
  }

  updateFilter(eve) {
    const val = eve.target.value.toLowerCase();
    
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    })
    this.states = temp;
    console.log(this.states);
  }
  

}
