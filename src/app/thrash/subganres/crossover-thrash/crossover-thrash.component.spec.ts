import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossoverThrashComponent } from './crossover-thrash.component';

describe('CrossoverThrashComponent', () => {
  let component: CrossoverThrashComponent;
  let fixture: ComponentFixture<CrossoverThrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossoverThrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossoverThrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
