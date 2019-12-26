import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanreBandsComponent } from './ganre-bands.component';

describe('GanreBandsComponent', () => {
  let component: GanreBandsComponent;
  let fixture: ComponentFixture<GanreBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanreBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanreBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
