import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';

@Component({
  selector: 'app-provideraside',
  templateUrl: './provideraside.component.html',
  styleUrls: ['./provideraside.component.css']
})
export class ProviderasideComponent implements OnInit {
  opts: ISlimScrollOptions;
  constructor() { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: '#000000',
      gridBackground: 'blue',
      gridWidth: '0',
      barWidth: '6',
      barOpacity: '0.5'
    }
  }

}
