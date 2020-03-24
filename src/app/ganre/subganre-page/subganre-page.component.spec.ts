import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubganrePageComponent } from './subganre-page.component';

describe('SubganrePageComponent', () => {
  let component: SubganrePageComponent;
  let fixture: ComponentFixture<SubganrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubganrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubganrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
