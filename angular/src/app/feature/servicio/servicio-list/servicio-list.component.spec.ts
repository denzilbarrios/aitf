import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServicioListComponent } from './servicio-list.component';

describe('ServicioListComponent', () => {
  let component: ServicioListComponent;
  let fixture: ComponentFixture<ServicioListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
