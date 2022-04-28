import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisputeComponent } from './view-dispute.component';

describe('ViewDisputeComponent', () => {
  let component: ViewDisputeComponent;
  let fixture: ComponentFixture<ViewDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDisputeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
