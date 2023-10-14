import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmpresaFormComponent } from './empresa-form.component';

describe('EmpresaFormComponent', () => {
  let component: EmpresaFormComponent;
  let fixture: ComponentFixture<EmpresaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
