import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MunicipioDetailsComponent } from './municipio-details.component';

describe('MunicipioDetailsComponent', () => {
  let component: MunicipioDetailsComponent;
  let fixture: ComponentFixture<MunicipioDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
