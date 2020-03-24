import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarsCollectionComponent } from './guitars-collection.component';

describe('GuitarsCollectionComponent', () => {
  let component: GuitarsCollectionComponent;
  let fixture: ComponentFixture<GuitarsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
