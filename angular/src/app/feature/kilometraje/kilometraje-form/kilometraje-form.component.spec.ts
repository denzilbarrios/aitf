import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KilometrajeFormComponent } from './kilometraje-form.component';

describe('KilometrajeFormComponent', () => {
  let component: KilometrajeFormComponent;
  let fixture: ComponentFixture<KilometrajeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometrajeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometrajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
