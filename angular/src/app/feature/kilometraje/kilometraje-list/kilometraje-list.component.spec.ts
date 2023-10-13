import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KilometrajeListComponent } from './kilometraje-list.component';

describe('KilometrajeListComponent', () => {
  let component: KilometrajeListComponent;
  let fixture: ComponentFixture<KilometrajeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometrajeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometrajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
