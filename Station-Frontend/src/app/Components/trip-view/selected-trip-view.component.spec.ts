import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTripViewComponent } from './selected-trip-view.component';

describe('TripViewComponent', () => {
  let component: SelectedTripViewComponent;
  let fixture: ComponentFixture<SelectedTripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTripViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
