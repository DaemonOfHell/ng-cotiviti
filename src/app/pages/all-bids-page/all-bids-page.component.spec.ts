import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBidsPageComponent } from './all-bids-page.component';

describe('AllBidsPageComponent', () => {
  let component: AllBidsPageComponent;
  let fixture: ComponentFixture<AllBidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBidsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
