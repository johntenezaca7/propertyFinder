import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInterfaceComponent } from './main-interface.component';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { AgmMap, AgmMarker, AgmInfoWindow, MapsAPILoader, AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDataService } from '../property-data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import Config from '../../../config.js';


describe('MainInterfaceComponent', () => {
  let component: MainInterfaceComponent;
  let fixture: ComponentFixture<MainInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, AgmCoreModule.forRoot({ apiKey: Config.apiKey}) ],
      declarations: [ 
        MainInterfaceComponent, 
        LeftPanelComponent, 
        MapViewComponent, 
        NavBarComponent, 
        PropertyCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
