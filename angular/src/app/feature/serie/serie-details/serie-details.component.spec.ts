import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieDetailsComponent } from './serie-details.component';

describe('SerieDetailsComponent', () => {
  let component: SerieDetailsComponent;
  let fixture: ComponentFixture<SerieDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
