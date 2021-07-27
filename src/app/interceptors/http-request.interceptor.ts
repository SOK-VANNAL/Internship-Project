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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkM1MjNFQzE2N0NBMkIyQTkxRkZEQjZFNkI4M0RCQUFEIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjczNzY5MTMsImV4cCI6MTYyNzM5ODUxMywiaXNzIjoiaHR0cHM6Ly9hdXRoei1hcGkuc2d4LmJ6IiwiYXVkIjpbInNhbGVzLWFwaSIsInNlY3VyaXR5LWFwaSJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwic3ViIjoiNTAwMDEiLCJhdXRoX3RpbWUiOjE2MjczNzY5MTMsImlkcCI6ImxvY2FsIiwiVXNlcm5hbWUiOiJ2YW5uYWw0NTAwQGdtYWlsLmNvbSIsIkZ1bGxuYW1lIjoiVmFubmFsIiwiUGVybWlzc2lvbiI6IjE7MjAwMDk7MjAwMDg7MjY7MjU7MjQ7MjM7MjI7MjE7MzU7MzQ7MzM7MjAwMTA7MjAwMjk7MzE7MzA7Mjk7MzAwMTc7MjA7MTk7MTg7MjAwMDc7NDszOzI7MzI7MjAwMTgiLCJqdGkiOiJBOEQyNUQyQjg3QTIyMEM3OEFEQjkxNzBGMUZGM0ExRSIsImlhdCI6MTYyNzM3NjkxMywic2NvcGUiOlsiYW55Il0sImFtciI6WyJwd2QiXX0.M16QXx2s9dud0zNzrxZLaHhgIc4QT0JC1BJiRMJeMdjPorq9h40wnZnGSFQ_r0juJt8zWo0wbPWL3I0Sm0Dg3Q-0b_A2rAdbgw-X2pqxvm18K1T8-JgEEr1cV4pG2drcyzQEsHuCtWddnDEsSDSqCZLRsUhaoaJripMBYPa29zcodnHi12ssbnI7FD7azEdO_JdL6dEo5FlES1yjL_0MF6S59rmfGUZM8zaZk60OWs3UjFn4XBb56Im6IDpldv1YluV2pAU0buni_cFaNr-dPppw4_XdTGQxkf1xhYvCsOed8hqDA5Pa9dOKgw65PrjMAFtYY1j5t6U-XzJGRK_YIg`,
        'X-Tenant-Id': 'leeho.sgx.bz'
      }
    })
    return next.handle(request);
  }
}
