import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBidFormComponent } from './create-bid-form.component';

describe('CreateBidFormComponent', () => {
  let component: CreateBidFormComponent;
  let fixture: ComponentFixture<CreateBidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBidFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
