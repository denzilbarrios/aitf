import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HorarioFormComponent } from './horario-form.component';

describe('HorarioFormComponent', () => {
  let component: HorarioFormComponent;
  let fixture: ComponentFixture<HorarioFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
