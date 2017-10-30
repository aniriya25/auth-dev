import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core'; 
import { UploadResult } from './../../common/components/bulkupload/bulkupload.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-addmemberbulk',
  templateUrl: './addmemberbulk.component.html',
  styleUrls: ['./addmemberbulk.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddmemberbulkComponent implements OnInit {
  public uploaderContent: BehaviorSubject<string> = new BehaviorSubject('please drop file in');
  basicInfo :  any = {}
  selectedCountry = {id: 0, name: 'India'};
  countries: Object;
  states: Object = {};
  memberData : any = [
    ["First Name","Middle Name","Last Name","DOB","Gender","Address","Country","State","City","Userid","Password"],
    ["Ankit","test","Sethi","28-11-1986","Male","test address","india","delhi","delhi","testuser","testassword"],
    ["Mahtab","testingmahtab","Alam","02-10-1944","Male","test address mahtab","india","bihar","darbhanga","testusermahtab","testasswordmahtab"]
  ];
  constructor() { }
  public xlsxUploaded(result: UploadResult) {
    this.uploaderContent.next(JSON.stringify(result));
    console.log(result);
    this.memberData = result.payload[0].rowwise;
    console.log(this.memberData);
  }
  ngOnInit() {
  }
  renderHTMLfromMemberData(){
    console.log(this.memberData);
  }
  validateHeader(){
    
  }
}