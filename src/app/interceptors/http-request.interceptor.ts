import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkM1MjNFQzE2N0NBMkIyQTkxRkZEQjZFNkI4M0RCQUFEIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjcwMDE4MDksImV4cCI6MTYyNzAyMzQwOSwiaXNzIjoiaHR0cHM6Ly9hdXRoei1hcGkuc2d4LmJ6IiwiYXVkIjpbInNhbGVzLWFwaSIsInNlY3VyaXR5LWFwaSJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwic3ViIjoiNTAwMDEiLCJhdXRoX3RpbWUiOjE2MjcwMDE4MDksImlkcCI6ImxvY2FsIiwiVXNlcm5hbWUiOiJ2YW5uYWw0NTAwQGdtYWlsLmNvbSIsIkZ1bGxuYW1lIjoiVmFubmFsIiwiUGVybWlzc2lvbiI6IjE7MjAwMDk7MjAwMDg7MjY7MjU7MjQ7MjM7MjI7MjE7MzU7MzQ7MzM7MjAwMTA7MjAwMjk7MzE7MzA7Mjk7MzAwMTc7MjA7MTk7MTg7MjAwMDc7NDszOzI7MzI7MjAwMTgiLCJqdGkiOiIwMERBQkVDMjc5QkI5NTRDQjVERjA3RjA4OTAzMTI4MSIsImlhdCI6MTYyNzAwMTgwOSwic2NvcGUiOlsiYW55Il0sImFtciI6WyJwd2QiXX0.rlmkXogf4Qigtc4gL4MQdk5pWyvRR4e_mSqbRy4iI1gbNqgSCGUkgcdeH6xWz0S-Gi4oT3hdbZ9Y2O-AFnuDnkdjPmYbHkuvbpfXG7LpoRty7Cxn84Boyvlwc1MKsX_OJpNNk3S-VPeYr2TxKbwILDJJ_WSdEIsxyeAdUFQ9066nH2nPx1ySi-SkJLbKlaoOKlrJ8KT1NRVAsTYhuet_eHCUQ-CBuW1l6y3KXOQ2jL7TGimqN0Ssv1FgudCl3o-2jWFpiuzXNCvgB-CFWTzfs5XUXatyO6CL099_PDaCpvHyhzEmZ8LIcJ_EOmNKbAhBXDe9krhW0pTu06gSuBd57g`,
        'X-Tenant-Id': 'leeho.sgx.bz'
      }
    })
    return next.handle(request);
  }
}
