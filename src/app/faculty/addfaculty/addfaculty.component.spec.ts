import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacultyComponent } from './addfaculty.component';

describe('AddfacultyComponent', () => {
  let component: AddfacultyComponent;
  let fixture: ComponentFixture<AddfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
