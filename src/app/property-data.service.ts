import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  constructor( private _http: HttpClient) { }

  apiUrl: string = 'https://api.sellproperly.com/api/wolfnet/properties?filter[state]=GA';


  activeProp = new Subject<{
    property: any,
    active: boolean
  }>()

  getDefault(): Observable<Object> {
    return this._http.get(this.apiUrl);
  }

  getActiveProp(): Observable<Object> {
    return this.activeProp;
  }

  selectProp(property): void {
    this.activeProp.next({
      property,
      active: true
    })
  }
}
