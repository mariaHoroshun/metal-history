import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarCardComponent } from './guitar-card.component';

describe('GuitarCardComponent', () => {
  let component: GuitarCardComponent;
  let fixture: ComponentFixture<GuitarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
