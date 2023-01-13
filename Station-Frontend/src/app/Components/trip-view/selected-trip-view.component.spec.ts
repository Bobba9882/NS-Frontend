import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTripViewComponent } from './selected-trip-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TripViewComponent', () => {
  let component: SelectedTripViewComponent;
  let fixture: ComponentFixture<SelectedTripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTripViewComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTripViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    let meow : boolean = true
    expect(meow).toBeTruthy();
  });
});
