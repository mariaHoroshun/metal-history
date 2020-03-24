import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanrePageComponent } from './ganre-page.component';

describe('GanrePageComponent', () => {
  let component: GanrePageComponent;
  let fixture: ComponentFixture<GanrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
