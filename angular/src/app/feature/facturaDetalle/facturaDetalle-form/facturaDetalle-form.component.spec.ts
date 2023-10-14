import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaDetalleFormComponent } from './facturaDetalle-form.component';

describe('FacturaDetalleFormComponent', () => {
  let component: FacturaDetalleFormComponent;
  let fixture: ComponentFixture<FacturaDetalleFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDetalleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDetalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
