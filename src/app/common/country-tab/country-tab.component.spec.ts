import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTabComponent } from './country-tab.component';

describe('CountryTabComponent', () => {
  let component: CountryTabComponent;
  let fixture: ComponentFixture<CountryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
