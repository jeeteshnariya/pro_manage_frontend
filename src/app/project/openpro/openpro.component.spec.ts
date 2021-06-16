import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenproComponent } from './openpro.component';

describe('OpenproComponent', () => {
  let component: OpenproComponent;
  let fixture: ComponentFixture<OpenproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
