import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBlockComponent } from './album-block.component';

describe('AlbumBlockComponent', () => {
  let component: AlbumBlockComponent;
  let fixture: ComponentFixture<AlbumBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
