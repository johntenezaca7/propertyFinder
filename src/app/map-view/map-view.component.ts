import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})

export class MapViewComponent implements OnInit {
  @Input() markers = [];

  constructor() { }

  ngOnInit() {
    if ( this.markers ){
      console.log('data passed:', this.markers)
    }
  }

}
