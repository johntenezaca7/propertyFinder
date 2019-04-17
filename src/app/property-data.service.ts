import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  constructor( private _http: HttpClient) { }

  apiUrl: string = 'https://api.sellproperly.com/api/wolfnet/properties?filter[state]=GA';

  activeProp = {
    property: {},
    active: false
  };

  getDefault(): Observable<Object> {
    return this._http.get(this.apiUrl);
  }

  getActiveProp(): Object {
    return this.activeProp;
  }

  selectProp(property): void {
    this.activeProp.property = property;
    this.activeProp.active = true;
    console.log('set', this.activeProp)
  }
}
