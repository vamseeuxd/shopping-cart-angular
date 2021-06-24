import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatyamComponent } from './satyam.component';

describe('SatyamComponent', () => {
  let component: SatyamComponent;
  let fixture: ComponentFixture<SatyamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatyamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
