import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgThrashComponent } from './prog-thrash.component';

describe('ProgThrashComponent', () => {
  let component: ProgThrashComponent;
  let fixture: ComponentFixture<ProgThrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgThrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgThrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
