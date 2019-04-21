import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDataService } from './property-data.service';

import Config from '../../config.js';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent,
    LeftPanelComponent,
    MapViewComponent,
    NavBarComponent,
    PropertyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: Config.apiKey
    })
  ],
  providers: [ PropertyDataService, GoogleMapsAPIWrapper ],
  bootstrap: [AppComponent]
})
export class AppModule { }
