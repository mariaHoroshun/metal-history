import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanreClipComponent } from './ganre-clip.component';

describe('GanreClipComponent', () => {
  let component: GanreClipComponent;
  let fixture: ComponentFixture<GanreClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanreClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanreClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
