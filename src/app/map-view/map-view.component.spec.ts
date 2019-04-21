import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewComponent } from './map-view.component';
import { AgmMap, AgmMarker, AgmInfoWindow, AgmCoreModule } from '@agm/core';
import Config from '../../../config.js';

class TestHostComponent {
  private input: string;

  setInput(newInput: string) {
    this.input = newInput;
  }
}

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AgmCoreModule.forRoot({ apiKey: Config.apiKey}) ],
      declarations: [ MapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
