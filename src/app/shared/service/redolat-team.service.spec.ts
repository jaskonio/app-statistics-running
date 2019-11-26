import { TestBed } from '@angular/core/testing';

import { RedolatTeamService } from './redolat-team.service';

describe('RedolatTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedolatTeamService = TestBed.get(RedolatTeamService);
    expect(service).toBeTruthy();
  });
});
