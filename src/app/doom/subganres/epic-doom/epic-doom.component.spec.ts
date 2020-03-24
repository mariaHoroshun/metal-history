import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicDoomComponent } from './epic-doom.component';

describe('EpicDoomComponent', () => {
  let component: EpicDoomComponent;
  let fixture: ComponentFixture<EpicDoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicDoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicDoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
