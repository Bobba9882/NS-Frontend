import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptionListComponent } from './disruption-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DisruptionListComponent', () => {
  let component: DisruptionListComponent;
  let fixture: ComponentFixture<DisruptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptionListComponent ],
      imports: [HttpClientTestingModule],
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
