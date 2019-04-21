import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PropertyDataService } from '../property-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnChanges {
  @Input() displayList: any;
  @Input() activeProperty: Object;
  @Input() newDisplay: Object;

  @Output() passResetObj = new EventEmitter;

  constructor( private _propertyDataService: PropertyDataService) {}

  ngOnChanges( changes: SimpleChanges ) {}

  passUp(ev) {
    this.passResetObj.emit(ev)
  }
}
