import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {

  constructor(private _propertyDataService: PropertyDataService ) { }

  data: any;
  activeProperty: Object;

  newDisplay = {
    list: null,
    show: false,
  }
  
  ngOnInit() {
    this.getDataOnLoad();
    this.getActivePropOnLoad();
    this.setData();
    this.setNewList();
  }

  getDataOnLoad() {
    return this._propertyDataService.getDefault()
      .subscribe(data => {
        this.data = data['data'].map(blob => {
          return blob['attributes'];
        });
      })
  }

  getActivePropOnLoad(): Subscription {
    return this._propertyDataService.getActiveProp()
      .subscribe(data => {
        this.activeProperty = data;
      });
  }

  setData():void {
    this._propertyDataService.setActiveProp({}, false);
  }

  setNewList(): Subscription {
    return this._propertyDataService.getNewList()
      .subscribe( data => {
        this.newDisplay.list = data
        this.newDisplay.show = true;
      });
  }

  goIt(event) {
    this.newDisplay.list = event.list;
    this.newDisplay.show = event.show;
  }

}
