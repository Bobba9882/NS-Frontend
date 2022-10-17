import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DisruptionListComponent } from './Components/disruption-list/disruption-list.component';
import {HttpClientModule} from "@angular/common/http";
import { TripHomeComponent } from './Components/trip-home/trip-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe, TitleCasePipe} from "@angular/common";
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DisruptionListComponent,
    TripHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TitleCasePipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
