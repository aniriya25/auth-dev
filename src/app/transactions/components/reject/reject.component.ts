import { Component, OnInit } from '@angular/core';

import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss']
})
export class RejectComponent implements OnInit {

 abc: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
  }

}
