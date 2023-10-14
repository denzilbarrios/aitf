import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpleadoDetailsComponent } from './empleado-details.component';

describe('EmpleadoDetailsComponent', () => {
  let component: EmpleadoDetailsComponent;
  let fixture: ComponentFixture<EmpleadoDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
