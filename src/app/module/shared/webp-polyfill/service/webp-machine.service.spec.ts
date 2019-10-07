import { TestBed } from '@angular/core/testing';

import { WebpMachineService } from './webp-machine.service';

describe('WebpMachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebpMachineService = TestBed.get(WebpMachineService);
    expect(service).toBeTruthy();
  });
});
