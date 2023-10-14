import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpresaDetailsComponent } from './empresa-details.component';

describe('EmpresaDetailsComponent', () => {
  let component: EmpresaDetailsComponent;
  let fixture: ComponentFixture<EmpresaDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
