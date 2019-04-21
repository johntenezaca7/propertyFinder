import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PropertyDataService } from '../property-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor( private _propertyDataService: PropertyDataService ) { }
  @Input() checkRest;
  @Output() outputValue = new EventEmitter();

  displaySortTxt = 'Default';

  // Methods need to be refactored 
  sortLowToHighPrice(): Subscription {
    return this._propertyDataService.getDefault()
      .subscribe( (data: Object[]) => {
        data = data['data'].map(blob => {
          return blob['attributes'];
        }).sort( (a, b) => {
          return a['listing-price'] - b['listing-price'];
        });

        this._propertyDataService.setNewData(data);
        this.displaySortTxt = 'Price Low To High';
      });
  }

  sortHighToLowPrice(): Subscription {
    return this._propertyDataService.getDefault()
      .subscribe( (data: Object[]) => {
        data = data['data'].map(blob => {
          return blob['attributes'];
        }).sort( (a, b) => {
          return b['listing-price'] - a['listing-price'];
        });

        this._propertyDataService.setNewData(data);
        this.displaySortTxt = 'Price High To Low';
      });
  }

  getByBedrooms(val) {
    return this._propertyDataService.getByBedrooms(val)
      .subscribe( (data: Object[]) => {
        data = data['data'].map( blob => {
          return blob['attributes']
        });

        this._propertyDataService.setNewData(data);
        this.displaySortTxt = `${val} Bedrooms`;
      });
  }

  // Resets Map & Property Card Grid View
  reset() {

    let resetObj = {
      list: null,
      show: false
    };

    this.outputValue.emit(resetObj);
    this._propertyDataService.setActiveProp({}, false);
    this.displaySortTxt = 'Default';
  }

}
