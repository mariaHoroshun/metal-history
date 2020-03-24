import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsbmComponent } from './dsbm.component';

describe('DsbmComponent', () => {
  let component: DsbmComponent;
  let fixture: ComponentFixture<DsbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
