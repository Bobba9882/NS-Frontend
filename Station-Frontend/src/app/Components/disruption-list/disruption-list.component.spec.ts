import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptionListComponent } from './disruption-list.component';

describe('DisruptionListComponent', () => {
  let component: DisruptionListComponent;
  let fixture: ComponentFixture<DisruptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisruptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
