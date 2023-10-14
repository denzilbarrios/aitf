import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PuestoDetailsComponent } from './puesto-details.component';

describe('PuestoDetailsComponent', () => {
  let component: PuestoDetailsComponent;
  let fixture: ComponentFixture<PuestoDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
