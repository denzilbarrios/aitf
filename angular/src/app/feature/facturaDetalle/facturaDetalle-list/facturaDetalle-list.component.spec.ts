import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaDetalleListComponent } from './facturaDetalle-list.component';

describe('FacturaDetalleListComponent', () => {
  let component: FacturaDetalleListComponent;
  let fixture: ComponentFixture<FacturaDetalleListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDetalleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDetalleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
