import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  constructor( private _http: HttpClient) { }

  apiUrl: string = 'https://api.sellproperly.com/api/wolfnet/properties?filter[state]=GA';

  getDefault() {
    return this._http.get(this.apiUrl);
  }
}
