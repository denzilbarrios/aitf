import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoletoDetailsComponent } from './boleto-details.component';

describe('BoletoDetailsComponent', () => {
  let component: BoletoDetailsComponent;
  let fixture: ComponentFixture<BoletoDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
