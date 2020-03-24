import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingInfoComponent } from './spelling-info.component';

describe('SpellingInfoComponent', () => {
  let component: SpellingInfoComponent;
  let fixture: ComponentFixture<SpellingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
