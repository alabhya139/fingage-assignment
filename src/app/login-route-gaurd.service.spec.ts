import { TestBed } from '@angular/core/testing';

import { LoginRouteGaurdService } from './login-route-gaurd.service';

describe('LoginRouteGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRouteGaurdService = TestBed.get(LoginRouteGaurdService);
    expect(service).toBeTruthy();
  });
});
