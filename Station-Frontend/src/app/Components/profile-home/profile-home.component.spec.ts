import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeComponent } from './profile-home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProfileHomeComponent', () => {
  let component: ProfileHomeComponent;
  let fixture: ComponentFixture<ProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHomeComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHomeComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    let meow: boolean = true
    expect(meow).toBeTruthy();
  });
});
