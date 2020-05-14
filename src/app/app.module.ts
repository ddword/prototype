import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestCache } from 'src/app/shared/services/request-cache.service';
import { AuthInterceptor } from 'src/app/shared/http-interceptors/auth-interceptor';
import { CachingInterceptor } from 'src/app/shared/http-interceptors/caching-interceptor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { AppComponent } from 'src/app/app.component';
import { LoginModule } from 'src/app/authentication/login/login.module';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { PanelModule } from 'src/app/panel/panel.module';
import { HomePageModule } from 'src/app/unit-modules/home-page/home-page.module';
import { DocumentationModule } from 'src/app/unit-modules/documentation/documentation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    PanelModule,
    HomePageModule,
    DocumentationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    RequestCache,
    ApiRestService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
