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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkM1MjNFQzE2N0NBMkIyQTkxRkZEQjZFNkI4M0RCQUFEIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjcwMjM1MjksImV4cCI6MTYyNzA0NTEyOSwiaXNzIjoiaHR0cHM6Ly9hdXRoei1hcGkuc2d4LmJ6IiwiYXVkIjpbInNhbGVzLWFwaSIsInNlY3VyaXR5LWFwaSJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwic3ViIjoiNTAwMDEiLCJhdXRoX3RpbWUiOjE2MjcwMjM1MjksImlkcCI6ImxvY2FsIiwiVXNlcm5hbWUiOiJ2YW5uYWw0NTAwQGdtYWlsLmNvbSIsIkZ1bGxuYW1lIjoiVmFubmFsIiwiUGVybWlzc2lvbiI6IjE7MjAwMDk7MjAwMDg7MjY7MjU7MjQ7MjM7MjI7MjE7MzU7MzQ7MzM7MjAwMTA7MjAwMjk7MzE7MzA7Mjk7MzAwMTc7MjA7MTk7MTg7MjAwMDc7NDszOzI7MzI7MjAwMTgiLCJqdGkiOiIyNkZFMTkwMDJCODJERjlCQkQwQjVEM0ZENjY2QjQyMiIsImlhdCI6MTYyNzAyMzUyOSwic2NvcGUiOlsiYW55Il0sImFtciI6WyJwd2QiXX0.qfB4kNOU0d008cunvoejY3hVNqR-vhrncvX4rVvOXLHzY_vpvbGQtU20Uvp9vB6AOn3FAd21ZZle3s5UbFxy2JkL7eIfJle6a-_4lVmwX9fxRl9bLQtXT7qm0ppBOJeL4C5K9NUUAc16k2ikECXOhoGB7prqfqH7zk8Bj_PqN0KU4M3-fXhBuXxxNLyHHonOAoc8VyS9g_jLDVva9hgBdEn754Wu8THbB24RN3eVOlSKQhjZu01pRDcunbcDRbI7BQQzx9kYb-cD6FSWSencN9ELChnDSDZ533Bc2Y-qpK9_UrXrNUSKZXra-lSUYo2B7cyqpi0Bd3GI1U90YpuRBw`,
        'X-Tenant-Id': 'leeho.sgx.bz'
      }
    })
    return next.handle(request);
  }
}
