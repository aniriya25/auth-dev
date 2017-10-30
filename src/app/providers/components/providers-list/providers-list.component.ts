import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { ProviderService } from './../../../services/providers/provider.service';
import * as moment from 'moment';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css'],
  providers: [ProviderService],
  encapsulation: ViewEncapsulation.None
})
export class ProvidersListComponent implements OnInit {
 @ViewChild('myTable') myTable: any;
 
  rows = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  selectedItem:any = 'all';
  teams = [];
  expanded: any = {};
  loadingIndicator: boolean = true;


  providers = [];

  constructor(
    public _provider: ProviderService,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getAllProviderList();
    this.myteam();
    this.myfX();
    this.cdf.detectChanges();
  } 

 
  // search 
  updateFilter(eve) {
    const val = eve.target.value.toLowerCase();

     // filter our data
    const temp = this.temp.filter(function(d) {
      return d.city.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // udpate rows
    this.rows = temp;    
  }

  // fetch data by date
  fetchRecByDate(eve) {
    //let _date = moment(eve,"DD/MM/YYYY").format('MM/DD/YYYY')
    //console.log(_date);
  }

  getAllProviderList() {
    this._provider.getAllProvider()
      .subscribe(data => {
        this.rows = data.data;
        this.temp = this.rows;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
        console.log(data.data);
      })
  }

  _getProviderType(name) {
    // this.records = this._provider.providerType(name);
    // this.rows = this.records[0].data;
    // this.temp = this.rows;
    this.selectedItem = name;
  }

  myteam() {
    this.teams = [
      {id: 1, name: 'Anindita Kundu'},
      {id: 2, name: 'Sahishta Parween'},
      {id: 3, name: 'Heena Khan'},
      {id: 4, name: 'Zarnish Ansaria'},
      {id: 5, name: 'Zaynah Khatoon'},
      {id: 6, name: 'Sanjida Khan'}
    ]
  }
  myfX() {
    this.myTable.rowDetail.expandAllRows();
   
  }

}

