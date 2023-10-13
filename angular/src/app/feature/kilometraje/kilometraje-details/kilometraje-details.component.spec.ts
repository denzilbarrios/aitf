import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KilometrajeDetailsComponent } from './kilometraje-details.component';

describe('KilometrajeDetailsComponent', () => {
  let component: KilometrajeDetailsComponent;
  let fixture: ComponentFixture<KilometrajeDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometrajeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometrajeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
