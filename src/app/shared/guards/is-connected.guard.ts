import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { switchMap, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard  {

  constructor(
  ) {}

  /**
   * Todo for implementation isConnectedGuard in unit-routing.module
   * public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> { return this.preferensService.rigthsState;}
   */

}
