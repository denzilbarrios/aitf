import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SerieListComponent } from './serie-list.component';

describe('SerieListComponent', () => {
  let component: SerieListComponent;
  let fixture: ComponentFixture<SerieListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
