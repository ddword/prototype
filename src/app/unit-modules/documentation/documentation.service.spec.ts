import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequestCache } from '../../shared/services/request-cache.service';
import { ApiRestService } from '../../shared/services/api-rest.service';
import { DocumentationService } from './documentation.service';

describe('DocumentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [RequestCache, ApiRestService],
  }));

  it('should be created', () => {
    const service: DocumentationService = TestBed.get(DocumentationService);
    expect(service).toBeTruthy();
  });
});
