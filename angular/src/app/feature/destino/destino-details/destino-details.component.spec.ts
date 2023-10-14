import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DestinoDetailsComponent } from './destino-details.component';

describe('DestinoDetailsComponent', () => {
  let component: DestinoDetailsComponent;
  let fixture: ComponentFixture<DestinoDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
