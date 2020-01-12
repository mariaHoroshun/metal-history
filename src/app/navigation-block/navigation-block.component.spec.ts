import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBlockComponent } from './navigation-block.component';

describe('NavigationBlockComponent', () => {
  let component: NavigationBlockComponent;
  let fixture: ComponentFixture<NavigationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
