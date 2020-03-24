import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanreListComponent } from './ganre-list.component';

describe('GanreListComponent', () => {
  let component: GanreListComponent;
  let fixture: ComponentFixture<GanreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
