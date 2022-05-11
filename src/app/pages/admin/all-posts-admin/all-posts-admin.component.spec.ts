import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsAdminComponent } from './all-posts-admin.component';

describe('AllPostsAdminComponent', () => {
  let component: AllPostsAdminComponent;
  let fixture: ComponentFixture<AllPostsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
