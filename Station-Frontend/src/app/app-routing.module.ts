import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisruptionListComponent} from "./disruption-list/disruption-list.component";


const routes: Routes = [
  {path: 'disruptions', component: DisruptionListComponent},
  {path: '', redirectTo: 'disruptions', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
