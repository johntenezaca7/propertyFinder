import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PropertyDataService } from '../property-data.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnChanges {
  @Input() propCard = {};

  constructor( private propertyDataService: PropertyDataService ) { }

  ngOnChanges(changes: SimpleChanges) {}

  setActiveProperty(prop):void {
    this.propertyDataService.setActiveProp(prop, true);
  }
}
