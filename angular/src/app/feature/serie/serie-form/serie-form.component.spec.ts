import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieFormComponent } from './serie-form.component';

describe('SerieFormComponent', () => {
  let component: SerieFormComponent;
  let fixture: ComponentFixture<SerieFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
