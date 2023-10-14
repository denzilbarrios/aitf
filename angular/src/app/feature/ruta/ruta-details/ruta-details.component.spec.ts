import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RutaDetailsComponent } from './ruta-details.component';

describe('RutaDetailsComponent', () => {
  let component: RutaDetailsComponent;
  let fixture: ComponentFixture<RutaDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
