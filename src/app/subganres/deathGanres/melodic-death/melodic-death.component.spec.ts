import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodicDeathComponent } from './melodic-death.component';

describe('MelodicDeathComponent', () => {
  let component: MelodicDeathComponent;
  let fixture: ComponentFixture<MelodicDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodicDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodicDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
