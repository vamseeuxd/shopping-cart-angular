import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamseeComponent } from './vamsee.component';

describe('VamseeComponent', () => {
  let component: VamseeComponent;
  let fixture: ComponentFixture<VamseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VamseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VamseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
