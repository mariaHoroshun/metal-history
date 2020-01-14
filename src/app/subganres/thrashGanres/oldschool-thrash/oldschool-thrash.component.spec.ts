import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldschoolThrashComponent } from './oldschool-thrash.component';

describe('OldschoolThrashComponent', () => {
  let component: OldschoolThrashComponent;
  let fixture: ComponentFixture<OldschoolThrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldschoolThrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldschoolThrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
