import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoletoListComponent } from './boleto-list.component';

describe('BoletoListComponent', () => {
  let component: BoletoListComponent;
  let fixture: ComponentFixture<BoletoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
