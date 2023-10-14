import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaDetalleDetailsComponent } from './facturaDetalle-details.component';

describe('FacturaDetalleDetailsComponent', () => {
  let component: FacturaDetalleDetailsComponent;
  let fixture: ComponentFixture<FacturaDetalleDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDetalleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDetalleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
