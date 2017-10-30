import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef} from '@angular/core';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';


@Component({
  selector: 'app-mous',
  templateUrl: './mous.component.html',
  styleUrls: ['./mous.component.css'],
  providers: [MdSnackBar]
})
export class MousComponent implements OnInit {

  @Input() mouTypes = [];
  @Input() annexures = [];
  @Input() isMouFieldset: boolean;
  @Input() isMouOverlay: boolean;
  @Input() isMouBtn: boolean;
  @Input() versionNo: boolean;
  @Output() mouFx = new EventEmitter<object>();
  @Output() getMouAnxrById = new EventEmitter<number>();
  @Input() mouVersions = [];

  @Input() mouInput: object = {};
  @Input() pdfversion: number;
  createAnnexureInput = [];
  files = [];
  @Input() completeSec: number;
  @Input() partialSec: number;
  colFirst: number;
  colSecond: number;
  colThird: number;
  fColsecond: number;
  myFile: string;
  position: string = 'above';
 // mouVersions = [];


  //maxDateVal:any = new Date().toLocaleDateString();
  maxDate = new Date();
  minDate;

  constructor(
    public snackBar: MdSnackBar,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.completeSec = 1;
    this.mouInput['mouTypeId'] = '1';
    //moment(this.mouInput['mouStartDate'],"DD/MM/YYYY").format('MM/DD/YYYY');

    if(this.versionNo == true) {
      this.colFirst = 33;
      this.colSecond = 33;
      this.colThird = 33;
    } else {
      this.colFirst = 25;
      this.colSecond = 25;
      this.colThird = 25;
    }

    if(this.mouInput['compDocUrl'] == undefined) {
      this.fColsecond = 100;
    } else {
      this.fColsecond = 70;
    }

    // this.mouVersions = [
    //   {id: 1, value: 'version 1.01'},
    //   {id: 2, value: 'version 1.02'},
    //   {id: 3, value: 'version 1.03'}
    // ]

     this.mouInput['versionId'] = '1';
  }

  getAnnexure(annexureInput: any){
    for(var i = 0; i < this.createAnnexureInput.length; i++) {
       if(this.createAnnexureInput[i]['id'] == annexureInput['id']) {
         return false;
       }
    }
    this.createAnnexureInput.push(annexureInput);
  }

  uploadFile(eve, annexure: any) {
    for(var i = 0; i < this.createAnnexureInput.length; i++) {
       if(this.createAnnexureInput[i]['id'] == annexure['id']) {
         return false;
       }
    }
    this.readPartialFile(eve.target, annexure);
  }

  readPartialFile(inputValue: any, annexure:any) : void {
    var file:File = inputValue.files[0];
    
    var partialReader:FileReader = new FileReader();
    partialReader.onloadend = (e) => {
      var particalDoc = partialReader.result;
      annexure['docUrl'] = particalDoc.substring(particalDoc.indexOf(",")+1);
      this.createAnnexureInput.push(annexure);
      this.createAnnexureInput;
      this.annexures;
    }
    partialReader.readAsDataURL(file);
  }

  getType(eve) {
   this.mouInput['compDocUrl'] = '';
   this.mouInput['validFromDate'] = '';
   this.mouInput['validToDate'] = '';
   this.createAnnexureInput = [];
    for(var i = 0; i < this.annexures.length; i++) {
      this.annexures[i]['startPage'] = '';
      this.annexures[i]['endPage'] = '';
      this.annexures[i]['remarks'] = '';
      this.annexures[i]['docUrl'] = '';
    }

  let type = eve['mouTypeId'];
    switch(type) {
      case '1':
        this.completeSec = 1;
        this.partialSec = 0;
        break;
      case '2':
        this.partialSec = 2;
        this.completeSec = 0;
        break;
    }
  }

  submitFrm(mou: any) {
    mou['validFromDate'] = moment(mou['validFromDate'],"DD/MM/YYYY").format('DD/MMM/YYYY');
    mou['validToDate'] = moment(mou['validToDate'],"DD/MM/YYYY").format('DD/MMM/YYYY');
    mou = {
      annexures: this.createAnnexureInput, 
      validfromdate: mou['validFromDate'], 
      validtodate: mou['validToDate'], 
      mouTypeId: mou['mouTypeId'],
      compDocUrl: mou['compDocUrl']
    };



    if(mou['mouTypeId'] == 1 || mou['mouTypeId'] == '1') {
      if(mou['compDocUrl'] == '') {
        console.log(mou['compDocUrl']);
        alert("sorry");
        return false;
      }
    }

    if(mou['mouTypeId'] == 2 || mou['mouTypeId'] == '2') {
     for(var i = 0; i < mou['annexures'].length; i++) {
       delete mou['annexures'][i]['startPage'];
       delete mou['annexures'][i]['endPage'];
       console.log(mou['annexures'][i]);
       
     }
    }

    mou['_type'] = false;
    this.mouFx.emit(mou);
  }

  edtFrm(eve) {
    eve['_type'] = true;
    this.mouFx.emit(eve);
  }

  public dropped(eve) : void {
    this.files = eve.files;
    for(var file of this.files) {
      file.fileEntry.file(info => {
        if(info.type == "application/pdf") {
          this.readAnxrFile(info);
        }
      })
    }
  }
  readAnxrFile(inputValue: any) : void {
    var file:File = inputValue;
    var anxrReader:FileReader = new FileReader();
    anxrReader.onloadend = (e) => {
      var anxrFile = anxrReader.result;
      this.mouInput['compDocUrl'] = anxrFile.substring(anxrFile.indexOf(",")+1);
      console.log(this.mouInput);
      console.log(anxrFile);
      this.cdf.detectChanges();
      return false;
    }
    anxrReader.readAsDataURL(file);
  }

  dosomething(newDate, type) {
   if(type == 'startDat') {
     this.mouInput['validFromDate'] = moment(newDate,"DD/MM/YYYY").format('MM/DD/YYYY');
     this.minDate = new Date(this.mouInput['validFromDate']);
     return false;
   }
   if(type == 'endDate') {
     this.mouInput['validToDate'] = moment(newDate,"DD/MM/YYYY").format('MM/DD/YYYY');
     this.maxDate = new Date(this.mouInput['validToDate']);
     return false;
   }
  }

  removeFile(removeItem: any) {
    console.log(removeItem);
    let rmId = removeItem['id'];
    for(var i = 0; i < this.createAnnexureInput.length; i++) {
      let rmId = Number(removeItem['id']);
      let oldId = Number(this.createAnnexureInput[i]['id']);
      if(rmId == oldId) {
        this.createAnnexureInput.splice(i, 1);
        // removeItem['isRemove'] = 'true';
        //this.createAnnexureInput.push(removeItem);
        for(var j = 0; j < this.annexures.length; j++) {
          if(this.annexures[j]['id'] == rmId) {
            this.annexures[j]['docUrl'] = '';
            this.annexures;
          }
        }
        this.cdf.detectChanges();
        return false;
      }
    }
  }
 
  getVersionId(id: number) {
    this.getMouAnxrById.emit(id);
  }

}
