import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {

  constructor(private propertyDataService: PropertyDataService ) { }

  data: any;

  ngOnInit() {
    return this.propertyDataService.getDefault()
      .subscribe( stream => {
        console.log(stream['data'])
        this.data = stream['data'];
      });
  }

}
