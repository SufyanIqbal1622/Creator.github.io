import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurteamComponent } from './ourteam.component';

describe('OurteamComponent', () => {
  let component: OurteamComponent;
  let fixture: ComponentFixture<OurteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});