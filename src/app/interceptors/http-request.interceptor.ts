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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkM1MjNFQzE2N0NBMkIyQTkxRkZEQjZFNkI4M0RCQUFEIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjcyOTA0NjcsImV4cCI6MTYyNzMxMjA2NywiaXNzIjoiaHR0cHM6Ly9hdXRoei1hcGkuc2d4LmJ6IiwiYXVkIjpbInNhbGVzLWFwaSIsInNlY3VyaXR5LWFwaSJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwic3ViIjoiNTAwMDEiLCJhdXRoX3RpbWUiOjE2MjcyOTA0NjcsImlkcCI6ImxvY2FsIiwiVXNlcm5hbWUiOiJ2YW5uYWw0NTAwQGdtYWlsLmNvbSIsIkZ1bGxuYW1lIjoiVmFubmFsIiwiUGVybWlzc2lvbiI6IjE7MjAwMDk7MjAwMDg7MjY7MjU7MjQ7MjM7MjI7MjE7MzU7MzQ7MzM7MjAwMTA7MjAwMjk7MzE7MzA7Mjk7MzAwMTc7MjA7MTk7MTg7MjAwMDc7NDszOzI7MzI7MjAwMTgiLCJqdGkiOiJCRjE4RkEzMkZBRDE2Q0Q3MkRERTY3RkJCNEE3REMzQiIsImlhdCI6MTYyNzI5MDQ2Nywic2NvcGUiOlsiYW55Il0sImFtciI6WyJwd2QiXX0.Rt6QbvgA9_PWAvULvKTsAcert4UxYOwUObDzGKurZKwvZPvgi9ubT0zNpPDfUiey8eESReUYxcleWJnVnncX0TzAZ8fFb_UZCjt2GXyCvivd2ddwgH0kJRpkt0v5mV_RR7d-mT8eC-X8USKyuuiljoij5_5wXLQljkko4bocmWZwYfCHDr8N9mn3TxXHb3hY0jhPPpoWLfj9Mdi8DV8MiF2oldgrlQ5hwDWPKoDyJWEKVoYytLjJzTf7fbTOCJVQEMGpdXh6KSxBjf2kCHXtH8xdqaECm44pkYctPNGV1qpHv1j6vD0lcAvalTVFZS1C9_YCgYFwzTc8FlX2zlAsRQ`,
        'X-Tenant-Id': 'leeho.sgx.bz'
      }
    })
    return next.handle(request);
  }
}
