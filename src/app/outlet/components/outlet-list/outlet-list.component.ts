import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OutletService } from './../../../services/outlet/outlet.service';

@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css'],
  providers: [OutletService]
})
export class OutletListComponent implements OnInit {
  rows = [];
  temp = [];
  provderId: number;
   isButton: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router,
    private _outlet: OutletService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((Params: Params) =>{
      this.provderId = Params['pid'];
      //console.log(this.provderId); 
      if(!Params['pid'] || isNaN(Params['pid'])) {        
        this._router.navigate(['/dashboard/providers/provider']);
      }
    });

    this.fetchOutlet();
  }

  updateFilter(eve) {
    const val = eve.target.value.toLowerCase();
    
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // udpate rows
    this.rows = temp;  
  }

  fetchOutlet() {
    //alert(this.provderId);
    this._outlet.getOutlets(this.provderId)
      .subscribe(data => {
        if(data.data) {
          this.rows = data.data;
          this.temp = this.rows;
          return false;
        }
        if(data.error['code'] == 204) {
          this.isButton = true;
        }
      }, Error => {
        alert("Something went wrong!")
      })
    
    //console.log(myOutlets);
  }

  
}
