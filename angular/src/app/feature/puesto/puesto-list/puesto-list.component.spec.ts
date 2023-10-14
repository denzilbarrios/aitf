import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PuestoListComponent } from './puesto-list.component';

describe('PuestoListComponent', () => {
  let component: PuestoListComponent;
  let fixture: ComponentFixture<PuestoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
