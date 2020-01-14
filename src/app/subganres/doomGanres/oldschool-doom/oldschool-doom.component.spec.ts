import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldschoolDoomComponent } from './oldschool-doom.component';

describe('OldschoolDoomComponent', () => {
  let component: OldschoolDoomComponent;
  let fixture: ComponentFixture<OldschoolDoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldschoolDoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldschoolDoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
