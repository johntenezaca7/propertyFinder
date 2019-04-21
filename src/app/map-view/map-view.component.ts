import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})

export class MapViewComponent implements OnChanges {
  @Input() markers: any[];
  @Input() activeProperty: Object;

  constructor() { }

  ngOnChanges() {}

}
