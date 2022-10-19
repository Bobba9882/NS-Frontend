import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHomeComponent } from './trip-home.component';

describe('TripHomeComponent', () => {
  let component: TripHomeComponent;
  let fixture: ComponentFixture<TripHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripHomeComponent ]
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
