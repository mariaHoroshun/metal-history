import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBlackComponent } from './second-black.component';

describe('SecondBlackComponent', () => {
  let component: SecondBlackComponent;
  let fixture: ComponentFixture<SecondBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
