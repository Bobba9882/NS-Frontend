import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisruptionListComponent} from "./Components/disruption-list/disruption-list.component";
import {TripHomeComponent} from "./Components/trip-home/trip-home.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";
import {ProfileHomeComponent} from "./Components/profile-home/profile-home.component";


const routes: Routes = [
  {path: 'disruptions', component: DisruptionListComponent},
  {path: 'home', component: TripHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileHomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
