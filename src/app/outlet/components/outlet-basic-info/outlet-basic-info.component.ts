import { Component, OnInit, EventEmitter, Input, Output, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-outlet-basic-info',
  templateUrl: './outlet-basic-info.component.html',
  styleUrls: ['./outlet-basic-info.component.css']
})
export class OutletBasicInfoComponent implements OnInit {
  @Output() outletBasicInfoFx = new EventEmitter<Object>();
  @Input() isOutletBasicFieldset: boolean;
  @Input() isOutletEditBtn: boolean;
  @Input() outletBasicFormOnverlay: boolean;
  @Input() btnText: string;

  public searchControl: FormControl;

  latitude: number;
  longitude: number;
  zoom: number;

    @ViewChild("search")
    public searchElementRef: ElementRef;

  @Input() outletBasicInfoInput: object = {};

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

   ngOnInit() {
    this.searchControl = new FormControl();
     this.zoom = 14;

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
                this.outletBasicInfoInput['city'] = place.address_components[i].long_name;
              }
              // get state
              if(place.address_components[i].types[j] == 'administrative_area_level_1') {
                this.outletBasicInfoInput['state'] = place.address_components[i].long_name;
              }
              // get postal code
               if(place.address_components[i].types[j] == 'postal_code') {
                this.outletBasicInfoInput['pincode'] = place.address_components[i].long_name;
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
          this.zoom = 14;

          // user input 
          this.outletBasicInfoInput['latlon'] = this.latitude+','+this.longitude;
          this.outletBasicInfoInput['latitude'] = this.latitude;
          this.outletBasicInfoInput['longitude'] = this.longitude;
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
        // this.zoom = 4;

        // user input
        this.outletBasicInfoInput['latlon'] = this.latitude+','+this.longitude;
        this.outletBasicInfoInput['latitude'] = this.latitude;
        this.outletBasicInfoInput['longitude'] = this.longitude;
      });
    }
  } 

  imageUploaded(eve) {
    let checktarget = eve.src;
    let checkUrl = checktarget.substring(checktarget.indexOf(",")+1);
    this.outletBasicInfoInput['logoLink'] = checkUrl;
  }

  submitFrm(obj: any) {
    obj['_type'] = "submitFrm";
    this.outletBasicInfoFx.emit(obj);
  }

  edit() {
    this.outletBasicInfoFx.emit({_type: 'editFrm'});
  }

}
