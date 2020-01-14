import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBlackComponent } from './first-black.component';

describe('FirstBlackComponent', () => {
  let component: FirstBlackComponent;
  let fixture: ComponentFixture<FirstBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
