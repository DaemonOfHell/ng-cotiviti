import { TestBed } from '@angular/core/testing';

import { MyBidsService } from './my-bids.service';

describe('MyBidsService', () => {
  let service: MyBidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
