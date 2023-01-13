import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHomeComponent } from './trip-home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DatePipe, TitleCasePipe} from "@angular/common";
import {MatAutocomplete} from "@angular/material/autocomplete";

describe('TripHomeComponent', () => {
  let component: TripHomeComponent;
  let fixture: ComponentFixture<TripHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripHomeComponent, MatAutocomplete ],
      imports: [HttpClientTestingModule],
      providers: [TitleCasePipe, DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
