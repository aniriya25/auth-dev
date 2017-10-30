import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { GlobalModule } from "./global/global.module";

import { routing } from './app-routing';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/auth/authentication.service';
 
import { MaterialModule } from '@angular/material';






// import { fakeBackendProvider } from './_helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';


 import { AppComponent } from './app.component';

// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
// import { AddmemberComponent } from './member/addmember/addmember.component';
// import { MemberlistComponent } from './member/memberlist/memberlist.component';
// import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
// import { AddmemberbulkComponent } from './member/addmemberbulk/addmemberbulk.component';
// import { BulkuploadComponent } from './bulkupload/bulkupload.component';
// import {FileUploadModule} from "ng2-file-upload";
// import { AddleadComponent } from './lead/addlead/addlead.component';
// import { LeadlistComponent } from './lead/leadlist/leadlist.component';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';
// import { PersonalinformationComponent } from './profile/personalinformation/personalinformation.component';
// import { CorporateComponent } from './profile/corporate/corporate.component';
// import { BiologicalComponent } from './profile/biological/biological.component';
// import { IdentityComponent } from './profile/identity/identity.component';
// import { BankingComponent } from './profile/banking/banking.component';
// import { SocialComponent } from './profile/social/social.component';
// import { CommunicationComponent } from './profile/communication/communication.component';

@NgModule({
  declarations: [
     AppComponent
     
    // LoginComponent,
    // DashboardComponent,
    // ForgotpasswordComponent,
    // UpdateprofileComponent,
    // AddmemberComponent,
    // MemberlistComponent,
    // SidebarmenuComponent,
    // AddmemberbulkComponent,
    // BulkuploadComponent,
    // AddleadComponent,
    // LeadlistComponent,
    // ChangepasswordComponent,
    // PersonalinformationComponent,
    // CorporateComponent,
    // BiologicalComponent,
    // IdentityComponent,
    // BankingComponent,
    // SocialComponent,
    // CommunicationComponent
  ],
  imports: [
    //FileUploadModule,
    routing,
    GlobalModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,    
  ],
  providers: [AuthGuard,AuthenticationService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
