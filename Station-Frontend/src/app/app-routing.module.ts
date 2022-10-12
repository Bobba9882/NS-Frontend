import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisruptionListComponent} from "./disruption-list/disruption-list.component";
import {TripHomeComponent} from "./trip-home/trip-home.component";


const routes: Routes = [
  {path: 'disruptions', component: DisruptionListComponent},
  {path: 'home', component: TripHomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
