import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpHeaders, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestCache } from 'src/app/shared/services/request-cache.service';


@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor( private cache: RequestCache ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // dont put post requests in RequestCache
    if (!this.isCachable(req)) { return next.handle(req); }
    const cachedResponse = this.cache.get(req);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  isCachable(req: HttpRequest<any>) {
    // Only GET requests are cachable
    return req.method === 'GET';
    // && -1 < req.url.indexOf(environment_url);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });
    return next.handle(noHeaderReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.set(req, event);
        }
      })
    );
  }
}
