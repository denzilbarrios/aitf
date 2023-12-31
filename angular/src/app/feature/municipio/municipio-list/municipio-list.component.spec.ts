import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MunicipioListComponent } from './municipio-list.component';

describe('MunicipioListComponent', () => {
  let component: MunicipioListComponent;
  let fixture: ComponentFixture<MunicipioListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
