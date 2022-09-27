import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DisruptionListComponent } from './disruption-list/disruption-list.component';
import {HttpClientModule} from "@angular/common/http";
import { TripHomeComponent } from './trip-home/trip-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DisruptionListComponent,
    TripHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
