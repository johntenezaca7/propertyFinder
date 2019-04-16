import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
