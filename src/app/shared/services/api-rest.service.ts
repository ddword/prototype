import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { RequestCache } from '../services/request-cache.service';
import { ILoginResponse } from './../_models/user';
import _ from 'lodash';

@Injectable()
export class ApiRestService {
  public environment = 'localhost:3000';

  constructor(
    /**
     * @params Todo on 2-nd step with ngrx@store and Api: implement private endpoint with Url like 'https://staging.host'.
     */
    private http: HttpClient,
    private cache: RequestCache,
    // private header: HttpHeaders
    // public params: HttpParams,
  ) {}

  /** header request for login user in system
   */
  private get postLoginOptions() {
    return {
      headers: new HttpHeaders().set('content-type', 'application/json; charset=utf-8').set('accept', 'application/json'),
      // withCredentials: true
    };
  }

  public login(username: string, password: string): Observable<any> {

    // return this.http.post<any>(`/api/login`, {...this.postLoginOptions, params: {email: username, password}})
    return this.http.get<any>(`/api/login`)
      .pipe(
        map(res => _.get(res, 'success.status') ? res.data : {}),
        catchError(error => {
          console.error('login request error', JSON.stringify(error));
          return of(false);
        }),
      );
  }

  /** to fill settings sidebar and define does it need show settings sidebar in child unit */
  public moduleSettings(userId: string, lang: string): Observable<any> {
    // try with object instead of any
    return this.http.get<any>(`/api/admin`)
    .pipe(
      map(res => _.get(res, 'success.status') ? res.data : {}),
      catchError(error => {
        console.error('units preferences request error', JSON.stringify(error));
        return of(false);
      })
    );
  }

  /** get categories for unit Documents */
  public highCategories(lang: string, module: string): Observable<any> {
    // try with object instead of any
    return this.http.get<any>(`/api/categories`)
    .pipe(
      map(res => _.get(res, 'success.status') ? res.data : {}),
      catchError(error => {
        console.error('high categories request error', JSON.stringify(error));
        return of(false);
      })
    );
  }

  /** get documentation tree in rage of choosen highCategory, unit Documents */
  public documentsTree(lang: string, category: string): Observable<any> {
    // try with object instead of any
    return this.http.get<any>(`/api/documentsTree`)
    .pipe(
      map(res => res.data),
      catchError(error => {
        console.error('docs tree request error', JSON.stringify(error));
        return of(false);
      })
    );
  }

  /** get zip archive of choosen files, unit Documents */
  public downloadZip(lang: string, category: string, files: string[], count: number): Observable<any> {
    // try with object instead of any
    return this.http.get<any>(`/api/zip`)
    .pipe(
      map(res => res.data),
      catchError(error => {
        console.error('zip request error', JSON.stringify(error));
        return of(false);
      })
    );
  }
}
