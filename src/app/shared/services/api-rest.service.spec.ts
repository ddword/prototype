import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule,  HttpHeaders} from '@angular/common/http';
import { ApiRestService } from './api-rest.service';
import { RequestCache } from '../services/request-cache.service';

describe('ApiRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ { provide: ApiRestService, useClass: RequestCache } ]
  }));

  it('should be created', () => {
    const service: ApiRestService = TestBed.get(ApiRestService);
    expect(service).toBeTruthy();
  });
});
