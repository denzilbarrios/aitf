import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgenciaFormComponent } from './agencia-form.component';

describe('AgenciaFormComponent', () => {
  let component: AgenciaFormComponent;
  let fixture: ComponentFixture<AgenciaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
