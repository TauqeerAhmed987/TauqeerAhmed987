import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsBaseComponent } from './vendors-base.component';

describe('VendorsBaseComponent', () => {
  let component: VendorsBaseComponent;
  let fixture: ComponentFixture<VendorsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
