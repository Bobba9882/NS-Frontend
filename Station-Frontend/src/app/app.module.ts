import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DisruptionListComponent} from './Components/disruption-list/disruption-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TripHomeComponent} from './Components/trip-home/trip-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe, TitleCasePipe} from "@angular/common";
import {LoginComponent} from './Components/login/login.component';
import {AuthInterceptor} from "./Services/auth.interceptor";
import { RegisterComponent } from './Components/register/register.component';
import { ProfileHomeComponent } from './Components/profile-home/profile-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    DisruptionListComponent,
    TripHomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [
    TitleCasePipe,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
