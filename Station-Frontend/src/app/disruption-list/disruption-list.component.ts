import {Component, OnInit} from '@angular/core';
import {Disruption} from "../Models/disruption";
import {DisruptionsService} from "../Services/disruptions.service";

@Component({
  selector: 'app-disruption-list',
  templateUrl: './disruption-list.component.html',
  styleUrls: ['./disruption-list.component.css']
})
export class DisruptionListComponent implements OnInit {

  Disruptions: Disruption[]

  constructor(private disruptionsService : DisruptionsService) {
  }

  ngOnInit(): void {
    this.getDisruptions()
  }

  private getDisruptions() {
    this.disruptionsService.getDisruptions().subscribe({
      next: (value => this.Disruptions = value),
    })
  }
}
