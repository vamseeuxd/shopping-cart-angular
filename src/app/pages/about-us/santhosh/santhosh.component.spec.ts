import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanthoshComponent } from './santhosh.component';

describe('SanthoshComponent', () => {
  let component: SanthoshComponent;
  let fixture: ComponentFixture<SanthoshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanthoshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanthoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
