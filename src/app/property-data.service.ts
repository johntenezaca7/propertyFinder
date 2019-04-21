import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService  {

  constructor( private _http: HttpClient) { }

  apiUrl: string = 'https://api.sellproperly.com/api/wolfnet/properties?filter[state]=GA';

  // Will be populated with different data overtime, used to display one marker at a time
  activeProp = new Subject<Object>();
  // Used to displayed a sorted list of property cards
  filteredData = new Subject<Array<Object>>();

  // Gets default property data from GA
  getDefault(): Observable<Object> {
    return this._http.get(this.apiUrl);
  }

  // Once subscribed, componenent will get the latest value
  getActiveProp(): Observable<Object> {
    return this.activeProp;
  }

  // Used to get a list of proerty based on my max amount of bathrooms
  getByBedrooms(num: number): Observable<Object> {
    return this._http.get(`${this.apiUrl}&filter[max_bedrooms]=${num}`);
  }

  // Passes new data to the ActiveProp Subject
  setActiveProp(property, active): void {
    this.activeProp.next({
      property,
      active,
    });
  }

  // Passes new data to the filteredData Subject
  setNewData( data:Object[] ): void {
    this.filteredData.next(data);
  }ß

  // Once subscribed, component will get the latest value
  getNewList(): Observable<Object> {
    return this.filteredData;
  }
}
