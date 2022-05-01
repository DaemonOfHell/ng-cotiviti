import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBidsComponent } from './personal-bids.component';

describe('PersonalBidsComponent', () => {
  let component: PersonalBidsComponent;
  let fixture: ComponentFixture<PersonalBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
