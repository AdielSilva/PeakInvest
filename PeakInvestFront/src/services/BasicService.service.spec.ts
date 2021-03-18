/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasicServiceService } from './BasicService.service';

describe('Service: BasicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicServiceService]
    });
  });

  it('should ...', inject([BasicServiceService], (service: BasicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
