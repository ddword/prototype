import { Injectable } from '@angular/core';
import { filter, take, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiRestService } from './api-rest.service';
import { ILoginResponse } from './../_models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userTokenSubject: BehaviorSubject<ILoginResponse>;
  public userToken: Observable<ILoginResponse>;

  constructor(
    private api: ApiRestService
  ) {
    /** Todo add for API checkToken method
     * get data from cache about currentUserSubject value
     * localStorage is temporary keep userToken inside Cache API or in webCookies
     */
    const cacheAvailable = 'caches' in self;
    console.log('cacheAvailable', cacheAvailable);
    this.userTokenSubject = new BehaviorSubject<ILoginResponse>(JSON.parse(localStorage.getItem('UserToken')));
    this.userToken = this.userTokenSubject.asObservable();
  }
    /** login store username and password if user click remember me
     *  basic auth credentials in local storage to keep user logged in between page refreshes
     */
  public login(username: string, password: string): Observable<any> {
    return this.api.login(username, password)
      .pipe(filter(data => {
        localStorage.setItem('UserToken', JSON.stringify(data));
        this.userTokenSubject.next(data);
        return data;
      }));
  }

  public get userTokenValue(): ILoginResponse {
    return this.userTokenSubject.value;
  }
  /**
   * @params Todo Create logout popup & logoutModule
   */
  logout() {
    this.userTokenSubject.next(null);

    /** expiration of token */
    localStorage.removeItem('UserToken');
  }
}
