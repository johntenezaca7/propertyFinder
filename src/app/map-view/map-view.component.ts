import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})

export class MapViewComponent implements OnInit, OnChanges {
  @Input() markers: any[];

  constructor( private propertyDataService: PropertyDataService ) { }

  activeProperty: Object;

  ngOnInit() {
    this.activeProperty = this.propertyDataService.getActiveProp();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
