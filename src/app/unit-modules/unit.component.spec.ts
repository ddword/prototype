import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { UnitComponent } from './unit.component';
import { RequestCache } from '../shared/services/request-cache.service';
import { UserService } from './../shared/services/user.service';
import { ApiRestService } from './../shared/services/api-rest.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UnitComponent', () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [UserService, RequestCache, ApiRestService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
