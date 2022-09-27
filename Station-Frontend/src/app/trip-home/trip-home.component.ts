import { Component, OnInit } from '@angular/core';
import {TripPlannerService} from "../trip-planner.service";

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  constructor(private tripPlannerService : TripPlannerService) { }

  ngOnInit(): void {

  }


}
