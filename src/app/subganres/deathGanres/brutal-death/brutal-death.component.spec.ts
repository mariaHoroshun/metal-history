import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutalDeathComponent } from './brutal-death.component';

describe('BrutalDeathComponent', () => {
  let component: BrutalDeathComponent;
  let fixture: ComponentFixture<BrutalDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrutalDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrutalDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
