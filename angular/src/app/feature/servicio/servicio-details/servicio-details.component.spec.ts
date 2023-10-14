import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServicioDetailsComponent } from './servicio-details.component';

describe('ServicioDetailsComponent', () => {
  let component: ServicioDetailsComponent;
  let fixture: ComponentFixture<ServicioDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
