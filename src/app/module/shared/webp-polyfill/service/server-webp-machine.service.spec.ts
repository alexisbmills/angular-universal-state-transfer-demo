import { TestBed } from '@angular/core/testing';

import { ServerWebpMachineService } from './server-webp-machine.service';

describe('NullWebpMachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerWebpMachineService = TestBed.get(ServerWebpMachineService);
    expect(service).toBeTruthy();
  });
});
