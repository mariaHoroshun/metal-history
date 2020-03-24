import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformBlockComponent } from './inform-block.component';

describe('InformBlockComponent', () => {
  let component: InformBlockComponent;
  let fixture: ComponentFixture<InformBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
