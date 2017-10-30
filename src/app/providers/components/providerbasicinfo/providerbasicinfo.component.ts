import { Component, OnInit, EventEmitter, Input, Output, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as moment from 'moment';

@Component({
  selector: 'app-providerbasicinfo',
  templateUrl: './providerbasicinfo.component.html',
  styleUrls: ['./providerbasicinfo.component.css']
})
export class ProviderbasicinfoComponent implements OnInit {
  public isReadonly:boolean = true;
  public zoom: number;
  public searchControl: FormControl;

  @Input() isBasicInfoActiveForm: boolean;
  @Input() isBasicInfoFormoOverlay: boolean;
  @Input() isBasicButton: Boolean;
  @Input() isBasicInfoFieldset: boolean;
  @Output() basicInfoFx = new EventEmitter<Object>();
  @Output() editFirm = new EventEmitter<boolean>();
  @Input() basicInfoProgress: boolean;
  @Input() basicInfoBtnText: string;
  @Input() basicInfoInput: Object;
  @Input() providerTypes: any;
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() profilePix: string;

  @ViewChild("search")
    public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  
  ngOnInit() {
    this.editFirm.emit(false);
    moment().format('DD/MMM/YYYY');
    this.zoom = 4;
    
    // user input
    this.basicInfoInput['latlon'] = this.latitude+','+this.longitude;

     //create search FormControl
     this.searchControl = new FormControl();

     //set current position
     this.setCurrentPosition();

     // load places autocomplete
     this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place.address_components);
          for(var i = 0; i < place.address_components.length; i++) {
            for(var j = 0; j < place.address_components[i].types.length; j++) {
              // get city
              if(place.address_components[i].types[j] == 'administrative_area_level_2') {
                this.basicInfoInput['city'] = place.address_components[i].long_name;
              }
              // get state
              if(place.address_components[i].types[j] == 'administrative_area_level_1') {
                this.basicInfoInput['state'] = place.address_components[i].long_name;
              }
              // get postal code
               if(place.address_components[i].types[j] == 'postal_code') {
                this.basicInfoInput['pincode'] = place.address_components[i].long_name;
              }
            }
          }

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 4;

          // user input 
          this.basicInfoInput['latlon'] = this.latitude+','+this.longitude;
        });
      });
    });
  }

  // current position 
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 4;

        // user input
        this.basicInfoInput['latlon'] = this.latitude+','+this.longitude;
      });
    }
  }

  // submit form 
  submitBasicFrm(user: any) {
    user['latitude'] = this.latitude;
     user['longitude'] = this.longitude;
     user['type'] = false;
      this.basicInfoFx.emit(user);
  }

  //edit form 
  edtFrm(user) {
    user['type'] = true;
    this.basicInfoFx.emit(user);
  }

  imageUploaded(eve){
    console.log(eve);
    let checktarget = eve.src;
    let checkUrl = checktarget.substring(checktarget.indexOf(",")+1);
    this.basicInfoInput['isPix'] = true;
    this.basicInfoInput['logoLink'] = checkUrl;
    this.profilePix = eve.src;
    //console.log(this.profilePix);
  }

  removeImg() {
    this.profilePix = '';
    this.basicInfoInput['isPix'] = true;
    this.basicInfoInput['logoLink'] = this.profilePix;
  }

}
