import { TestBed } from '@angular/core/testing';

import { DisruptionsService } from './disruptions.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DisruptionsService', () => {
  let service: DisruptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DisruptionsService]
    }).compileComponents();
    service = TestBed.inject(DisruptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
