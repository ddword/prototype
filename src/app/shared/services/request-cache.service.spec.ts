import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequestCache } from './request-cache.service';

describe('RequestCache', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ RequestCache ]
  }));

  it('should be created', () => {
    const service: RequestCache = TestBed.get(RequestCache);
    expect(service).toBeTruthy();
  });
});
