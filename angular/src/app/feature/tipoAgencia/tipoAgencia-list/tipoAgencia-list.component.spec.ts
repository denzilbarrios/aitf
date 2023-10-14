import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoAgenciaListComponent } from './tipoAgencia-list.component';

describe('TipoAgenciaListComponent', () => {
  let component: TipoAgenciaListComponent;
  let fixture: ComponentFixture<TipoAgenciaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAgenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAgenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
