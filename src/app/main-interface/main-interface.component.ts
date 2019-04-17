import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {

  constructor(private propertyDataService: PropertyDataService ) { }

  data: any[];

  ngOnInit() {
    this.getDataOnLoad();
  }

  getDataOnLoad(): Subscription {
    return this.propertyDataService.getDefault()
      .subscribe( stream => {
        this.data = stream['data'];
      });
  }

}
