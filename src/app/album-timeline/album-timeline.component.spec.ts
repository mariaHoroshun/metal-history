import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTimelineComponent } from './album-timeline.component';

describe('AlbumTimelineComponent', () => {
  let component: AlbumTimelineComponent;
  let fixture: ComponentFixture<AlbumTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
