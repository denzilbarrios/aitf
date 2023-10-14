import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoletoFormComponent } from './boleto-form.component';

describe('BoletoFormComponent', () => {
  let component: BoletoFormComponent;
  let fixture: ComponentFixture<BoletoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
