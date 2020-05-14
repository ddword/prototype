import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataStoreService } from './data-store.service';
import { DocumentationService } from './../../unit-modules/documentation/documentation.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataStoreService, DocumentationService ]
  }));

  it('should be created', () => {
    const service: DataStoreService = TestBed.get(DataStoreService);
    expect(service).toBeTruthy();
  });
});
