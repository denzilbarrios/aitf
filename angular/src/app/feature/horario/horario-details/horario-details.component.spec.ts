import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HorarioDetailsComponent } from './horario-details.component';

describe('HorarioDetailsComponent', () => {
  let component: HorarioDetailsComponent;
  let fixture: ComponentFixture<HorarioDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
