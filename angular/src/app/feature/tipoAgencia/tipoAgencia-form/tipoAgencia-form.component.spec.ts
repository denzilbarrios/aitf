import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoAgenciaFormComponent } from './tipoAgencia-form.component';

describe('TipoAgenciaFormComponent', () => {
  let component: TipoAgenciaFormComponent;
  let fixture: ComponentFixture<TipoAgenciaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAgenciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAgenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
