import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedBidsComponent } from './posted-bids.component';

describe('PostedBidsComponent', () => {
  let component: PostedBidsComponent;
  let fixture: ComponentFixture<PostedBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
