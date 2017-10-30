import { Component, OnInit, ChangeDetectorRef, EventEmitter, Input, Output} from '@angular/core';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';

@Component({
  selector: 'app-outlet-mous',
  templateUrl: './outlet-mous.component.html',
  styleUrls: ['./outlet-mous.component.css']
})
export class OutletMousComponent implements OnInit {
  public files = [];
  temp = [];

    @Input() mouseSec: boolean;
    @Output() mouseFx = new EventEmitter<object>();

  constructor(
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }


  
  public dropped(eve) {
   this.files = eve.files;
   console.log(this.files[0].fileEntry.file);
    for(var file of this.files) {
      file.fileEntry.file(info => {
        //if(info.type == 'image/png') {
          this.temp.push({name: info.name, type: info.type});
          this.cdf.detectChanges();
          return false;
        //}
        //alert("sorry!");
        //return false;
      })
    }
     console.log(this.temp.indexOf);
  }

  //public fileOver(event){}

  //public fileLeave(event){}
  
  removeItem(indx) {
    console.log(indx);
    console.log(this.temp);
    var x = Number(indx);
    this.temp.splice(x,1);
    this.cdf.detectChanges();
    console.log(this.temp);
    
  }

  submitFrm(files: any) {
    this.mouseFx.emit(this.temp);
  }

}
