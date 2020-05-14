import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequestCache } from '../../shared/services/request-cache.service';
import { ApiRestService } from '../../shared/services/api-rest.service';
import { PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [RequestCache, ApiRestService],
  }));

  it('should be created', () => {
    const service: PreferencesService = TestBed.get(PreferencesService);
    expect(service).toBeTruthy();
  });
});
