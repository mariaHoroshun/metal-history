import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldschoolDeathComponent } from './oldschool-death.component';

describe('OldschoolDeathComponent', () => {
  let component: OldschoolDeathComponent;
  let fixture: ComponentFixture<OldschoolDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldschoolDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldschoolDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
