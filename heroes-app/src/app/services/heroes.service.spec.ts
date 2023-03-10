import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
