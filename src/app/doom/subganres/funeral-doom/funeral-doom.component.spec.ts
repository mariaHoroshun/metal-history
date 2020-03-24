import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralDoomComponent } from './funeral-doom.component';

describe('FuneralDoomComponent', () => {
  let component: FuneralDoomComponent;
  let fixture: ComponentFixture<FuneralDoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuneralDoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuneralDoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
