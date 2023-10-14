import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoAgenciaDetailsComponent } from './tipoAgencia-details.component';

describe('TipoAgenciaDetailsComponent', () => {
  let component: TipoAgenciaDetailsComponent;
  let fixture: ComponentFixture<TipoAgenciaDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAgenciaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAgenciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
