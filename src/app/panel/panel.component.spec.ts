import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PanelComponent } from './panel.component';
import { RequestCache } from '../shared/services/request-cache.service';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from '../shared/services/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent, HeaderComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [ UserService, RequestCache ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
