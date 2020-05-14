import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestCache } from './../../../shared/services/request-cache.service';
import { ApiRestService } from './../../../shared/services/api-rest.service';
import { SettingsSidebarComponent } from './settings-sidebar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SettingsSidebarComponent', () => {
  let component: SettingsSidebarComponent;
  let fixture: ComponentFixture<SettingsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSidebarComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ RequestCache, ApiRestService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
