import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanreAlbumComponent } from './ganre-album.component';

describe('GanreAlbumComponent', () => {
  let component: GanreAlbumComponent;
  let fixture: ComponentFixture<GanreAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanreAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanreAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
