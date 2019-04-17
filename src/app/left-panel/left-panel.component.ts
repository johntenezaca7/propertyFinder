import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit, OnChanges {
  @Input() displayList: any[];
  // @Input() 

  constructor( private propertyDataService: PropertyDataService ) { }

  ngOnInit() {
    // console.log('parent before', this.activeProp)
    
    // console.log('parent after', this.activeProp)
  }

  ngOnChanges( changes: SimpleChanges) {
    // console.log('parent before', this.activeProp)
    // this.activeProp = this.propertyDataService.getActiveProp()
    // console.log('parent after', this.activeProp)
  }

}
