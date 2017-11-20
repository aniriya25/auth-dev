import { Component, OnInit, ViewChild} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  
  
  rows = [
    {}
  ];
  
    temp = [];
  
    columns = [
      { prop: 'name' },
      { name: 'Company' },
      { name: 'Gender' }
    ];
    @ViewChild(SummaryComponent) table: SummaryComponent;
    constructor() {
      this.fetch((data) => {
        // cache our list
        this.temp = [...data];
  
        // push our inital complete list
        this.rows = data;
      });
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/company.json`);
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
    }
  
    updateFilter(event) {
      debugger
      const val = event.target.value.toLowerCase();
  
      // filter our data
      const temp = this.temp.filter(function(d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
  
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;
    }
    ngOnInit() {}

}
