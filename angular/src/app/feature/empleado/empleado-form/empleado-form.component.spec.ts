import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpleadoFormComponent } from './empleado-form.component';

describe('EmpleadoFormComponent', () => {
  let component: EmpleadoFormComponent;
  let fixture: ComponentFixture<EmpleadoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
