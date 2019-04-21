import { TestBed } from '@angular/core/testing';

import { PropertyDataService } from './property-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async } from '@angular/core/testing';


describe('PropertyDataService', () => {
  let service: PropertyDataService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });

    service = TestBed.get(PropertyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("data['data'] should be an array", async(() => {
    service.getDefault().subscribe( data => {
      expect( Array.isArray(data['data'])).toBe(true);
    });
  }));

  it("data['data'] should have a length of 25", async(() => {
    service.getDefault().subscribe( data => {
      expect(data['data'].length).toBe(25);
    });
  }));

});
